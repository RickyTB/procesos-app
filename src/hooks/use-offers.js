import {useEffect, useState} from "react";

import {useUser} from "../context/userContext";
import firebase from "../firebase/clientApp";

const useOffers = () => {
    const {user} = useUser();
    const [offers, setOffers] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (!user) return;
        setLoading(true);
        const db = firebase.firestore();
        return db.collection(`users/${user.uid}/offers`)
            .onSnapshot(snapshot => {
                const offers = [];
                snapshot.forEach(doc => offers.push(doc.data()));
                setOffers(offers);
                setLoading(false);
            }, error => console.log(error));
    }, [user]);
    return [offers, loading];
};

export default useOffers;