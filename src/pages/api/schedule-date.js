import {db} from "../../firebase/serverApp";

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});

    const {fecha: startsAt, lugar: address, usuarioId: userId, comentario: message} = req.body;

    try {
        let snapshot = await db.collection('users').where("bonitaId", "==", userId).get();
        if (snapshot.empty) {
            console.log('No matching documents.');
            res.status(404).json({success: false});
            return;
        }
        const users = [];
        snapshot.forEach(doc => users.push(doc));
        const [user] = users;
        await db.collection(`users/${user.id}/appointments`).add({
            startsAt,
            address,
            message
        });
        res.status(200).json({success: ":D"});
    } catch (e) {
        console.log(e);
        return res.status(400).json({error: e});
    }
}
