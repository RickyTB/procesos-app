import React from 'react';
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import AccountLayout from "../../../components/AccountLayout/AccountLayout";
import OfferCard from "../../../components/OfferCard/OfferCard";
import useOffers from "../../../hooks/use-offers";

const Offers = () => {
    const [offers, loading] = useOffers();
    return (
        <AccountLayout>
            <Head>
                <title>Mis Ofertas</title>
            </Head>
            <section className="section px-0 py-5">
                <h1 className="title is-1">Mis ofertas</h1>
                {loading ? (
                    <p className="has-text-primary has-text-centered">
                        <FontAwesomeIcon icon="circle-notch" size="3x" spin/>
                    </p>
                ) : (
                    <div className="columns is-multiline">
                        {offers.map(offer => (
                            <div className="column is-4" key={offer.caseId}>
                                <OfferCard offer={offer}/>
                            </div>
                        ))}
                    </div>
                )}
            </section>
        </AccountLayout>
    );
};

export default Offers;