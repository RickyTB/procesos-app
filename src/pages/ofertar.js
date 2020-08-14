import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";

import {useUser} from "../context/userContext";
import firebase from "../firebase/clientApp";
import OffersClosed from "../components/OffersClosed/OffersClosed";
import OffersAuth from "../components/OffersAuth/OffersAuth";
import OffersOpen from "../components/OffersOpen/OffersOpen";
import useOffers from "../hooks/use-offers";
import {printPlural} from "../utils/helpers";

const PublishOffer = () => {
    const {user} = useUser();
    const [offers] = useOffers();
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
                <h1 className="title is-1">Publicar oferta <span className={clsx("tag is-light is-large", {
                    "is-warning": offers.length === 0,
                    "is-info": offers.length > 0
                })}>{offers.length} oferta{printPlural(offers.length)} publicada{printPlural(offers.length)}</span></h1>
                {!loaded ? (
                    <p className="has-text-primary has-text-centered">
                        <FontAwesomeIcon icon="circle-notch" size="3x" spin/>
                    </p>
                ) : !enabled ? <OffersClosed/> : !user ?
                    <OffersAuth/> : <OffersOpen/>}
            </section>
        </>
    );
};

export default PublishOffer;