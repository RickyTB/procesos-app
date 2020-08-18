import React from "react";
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import moment from 'moment';
import 'moment/locale/es';

import UserProvider from '../context/userContext';
import Layout from "../components/Layout/Layout";
import '../utils/icons';

import '../styles/main.scss';

config.autoAddCss = false;
moment.locale('es');

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
