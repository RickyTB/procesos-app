import {db} from "../../firebase/serverApp";

export default async (req, res) => {
    if (req.method !== "POST") return res.status(404).json({error: {message: "Route not found."}});

    const {precio: price, imagen: image, estado: state, nombre: name} = req.body;

    try {
        await db.collection(`consoles`).add({
            name,
            image,
            state,
            price
        });
        res.status(200).json({success: ":D"});
    } catch (e) {
        console.log(e);
        return res.status(400).json({error: e});
    }
}
