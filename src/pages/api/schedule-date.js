import {db} from "../../firebase/serverApp";

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});

    const {fecha: startsAt, lugar: address, usuarioId: userId, comentario: message} = req.body;

    try {
        let snapshot = await db.collection('users').where("bonitaId", "==", userId).get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            return;
        }
        const users = [];
        snapshot.forEach(doc => users.push(doc));
        const [user] = users;
        const docRef = await user.collection("appointments").add({
            startsAt,
            address,
            message
        });
        console.log(docRef.data());
        res.status(200).json({success: ":D"});
    } catch (e) {
        return res.status(400).json({error: e});
    }
}
