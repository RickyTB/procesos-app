import {db} from "../../firebase/serverApp";

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});
    const enabled = req.body.enabled || false;
    try {
        const docRef = db.collection('accept-posts').doc('yiSYcDNY94t4gYonO40Q');
        await docRef.set({enabled});
        res.status(200).json({enabled});
    } catch (e) {
        return res.status(400).json({error: e});
    }
}
