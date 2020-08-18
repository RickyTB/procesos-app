import React, {useEffect, useState} from 'react';

import Console from "./Console/Console";
import firebase from "../../firebase/clientApp";

const Consoles = () => {
    const [consoles, setConsoles] = useState([]);
    useEffect(() => {
        const db = firebase.firestore();
        return db.collection(`consoles`)
            .onSnapshot(snapshot => {
                const docs = [];
                snapshot.forEach(doc => docs.push({id: doc.id, ...doc.data()}));
                setConsoles(docs);
            }, error => console.log(error));
    }, []);
    return (
        <div className="columns is-multiline">
            {consoles.map(console => (
                <div className="column is-3" key={console.id}>
                    <Console console={console}/>
                </div>
            ))}
        </div>
    );
};

export default Consoles;