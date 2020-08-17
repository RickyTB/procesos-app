import React from 'react';
import Head from "next/head";

import AccountLayout from "../../components/AccountLayout/AccountLayout";

const Offers = () => {
    return (
        <AccountLayout>
            <Head>
                <title>Mis Ofertas</title>
            </Head>
            <section className="section px-0 py-5">
                <h1 className="title is-1">Mis ofertas</h1>
            </section>
        </AccountLayout>
    );
};

export default Offers;