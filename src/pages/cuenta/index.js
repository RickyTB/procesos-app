import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Head from "next/head";

import AccountLayout from "../../components/AccountLayout/AccountLayout";

const Account = () => (
    <AccountLayout>
        <Head>
            <title>Mi Cuenta</title>
        </Head>
        <div className="notification is-primary is-light mt-5">
            <FontAwesomeIcon icon="info-circle"/>&nbsp;Selecciona una de las opciones en el panel de la izquierda.
        </div>
    </AccountLayout>
);

export default Account;