import React from "react";
import Head from "next/head";

import UserProvider from '../context/userContext';
import Layout from "../components/Layout/Layout";

import '../styles/main.scss';

export default function App({Component, pageProps}) {
    return (
        <>
            <Head>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <UserProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
        </>
    );
};
