import React from "react";

import UserProvider from '../context/userContext';
import Layout from "../components/Layout/Layout";

import '../styles/main.scss';

export default function App({Component, pageProps}) {
    return (
        <>
            <UserProvider>
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </UserProvider>
        </>
    );
};
