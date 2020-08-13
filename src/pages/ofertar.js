import React, {useEffect, useState} from 'react';
import Head from "next/head";

import {useUser} from "../context/userContext";
import firebase from "../firebase/clientApp";
import OffersClosed from "../components/OffersClosed/OffersClosed";
import OffersAuth from "../components/OffersAuth/OffersAuth";
import OffersOpen from "../components/OffersOpen/OffersOpen";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const PublishOffer = () => {
    const {user} = useUser();
    const [enabled, setEnabled] = useState(false);
    const [loaded, setLoaded] = useState(false);
    useEffect(() => {
        const db = firebase.firestore();
        return db.collection("accept-posts").doc("yiSYcDNY94t4gYonO40Q")
            .onSnapshot(doc => {
                setEnabled(doc.data()?.enabled || false);
                setLoaded(true);
            });
    }, []);
    return (
        <>
            <Head>
                <title>Publicar oferta</title>
            </Head>
            <section className="section">
                <h1 className="title is-1">Publicar oferta</h1>
                {!loaded ? (
                    <p className="has-text-primary has-text-centered">
                        <FontAwesomeIcon icon="circle-notch" size="3x" spin/>
                    </p>
                ) : !enabled ? <OffersClosed/> : !user ?
                    <OffersAuth/> : <OffersOpen/>}
            </section>
            {user && (
                <section className="section pt-0">
                    <h2 className="title is-2">Mis ofertas</h2>
                </section>
            )}
        </>
    );
};

export default PublishOffer;