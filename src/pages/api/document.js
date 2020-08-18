import ejs from 'ejs';
import puppeteer from 'puppeteer';
import AWS from 'aws-sdk';
import moment from "moment";
import 'moment/locale/es'

import contractHTML from "../../assets/contract";
import {db} from "../../firebase/serverApp";

AWS.config.update({
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

moment.locale("es");

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});

    const params = {
        user: {
            name: req.body.userName,
            idNumber: req.body.idNumber,
        },
        offer: {
            type: req.body.offerType,
            age: req.body.offerAge,
            price: req.body.offerPrice
        },
        contract: {
            serialNo: req.body.serialNo
        },
        currentDate: moment().format("LL")
    }
    const html = ejs.render(contractHTML, params);
    const pdf = await generatePDF(html);
    const url = await saveFile(pdf);

    try {
        let snapshot = await db.collection('users').where("bonitaId", "==", req.body.userId).get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        const users = [];
        snapshot.forEach(doc => users.push(doc));
        const [user] = users;
        await db.collection(`users/${user.id}/contracts`).add({url, createdAt: new Date()});
        res.status(200).json({success: ":D"});
    } catch (e) {
        return res.status(400).json({error: e});
    }
}

const generatePDF = async (html) => {
    const browser = await puppeteer.launch({headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox']});
    const page = await browser.newPage();
    await page.setContent(html, {waitUntil: 'networkidle0'});
    const pdf = await page.pdf({format: 'A4'});
    await browser.close();
    return pdf;
}

const saveFile = async (file) => {
    const myBucket = 'procesos-app';
    const fileName = `Contrato-${new Date().getTime()}.pdf`;
    const myKey = `contratos/${fileName}`;
    const params = {Bucket: myBucket, Key: myKey, Body: file, ACL: 'public-read'};
    await s3.putObject(params).promise();
    return `https://procesos-app.s3.amazonaws.com/contratos/${fileName}`;
}