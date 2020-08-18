import AWS from 'aws-sdk';
import {v4 as uuidv4} from 'uuid';
import multer from "multer";
import multerS3 from "multer-s3";
import mime from "mime-types";

let lastId = uuidv4();
let lastExtension = "";

AWS.config.update({
    accessKeyId: process.env.AWS_KEY_ID,
    secretAccessKey: process.env.AWS_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new AWS.S3();

export const config = {
    api: {
        bodyParser: false
    }
};

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'procesos-app',
        acl: 'public-read',
        contentType: multerS3.AUTO_CONTENT_TYPE,
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            const extension = mime.extension(file.mimetype);
            lastExtension = extension;
            cb(null, `imagenes/${lastId}.${extension}`)
        }
    })
});

function runMiddleware(req, res, fn) {
    return new Promise((resolve, reject) => {
        fn(req, res, (result) => {
            if (result instanceof Error) {
                return reject(result)
            }

            return resolve(result)
        })
    })
}

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});
    lastId = uuidv4();
    await runMiddleware(req, res, upload.single("pbUpload0"));
    res.status(200).json({url: `https://procesos-app.s3.amazonaws.com/imagenes/${lastId}.${lastExtension}`});
}