import {useEffect, useState} from "react";

import {useUser} from "../context/userContext";
import firebase from "../firebase/clientApp";

const useDocuments = () => {
    const {user} = useUser();
    const [documents, setDocuments] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!user) return;
        setLoading(true);
        const db = firebase.firestore();
        return db.collection(`users/${user.uid}/contracts`)
            .onSnapshot(snapshot => {
                const docs = [];
                snapshot.forEach(doc => docs.push({id: doc.id, ...doc.data()}));
                setDocuments(docs);
                setLoading(false);
            }, error => console.log(error));
    }, [user]);
    return [documents, loading];
};

export default useDocuments;