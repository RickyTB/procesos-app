import React, {useEffect, useState} from 'react';
import Head from "next/head";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import AccountLayout from "../../../components/AccountLayout/AccountLayout";
import firebase from "../../../firebase/clientApp";
import {useUser} from "../../../context/userContext";

const Document = ({documentId}) => {
    const {user} = useUser();
    const [contract, setContract] = useState(null);

    useEffect(() => {
        if (!user) return;
        const db = firebase.firestore();
        return db.collection(`users/${user.uid}/contracts`).doc(documentId)
            .onSnapshot(snapshot => {
                setContract(snapshot.data());
            }, error => console.log(error));
    }, [user, documentId]);
    return (
        <AccountLayout>
            <Head>
                <title>Documento</title>
            </Head>
            <section className="section px-0 py-5">
                <h1 className="title is-1">Contrato de Compra-Venta <a
                    className="button is-primary is-light is-medium mb-3" href={contract?.url}>
                    <FontAwesomeIcon icon="file-download"/>&nbsp;Descargar</a>
                </h1>
                <iframe
                    src={`https://docs.google.com/viewerng/viewer?url=${contract?.url}&embedded=true`}
                    frameBorder="0" height="800px" width="100%">
                </iframe>
            </section>
        </AccountLayout>
    );
};

export async function getServerSideProps({params}) {
    return {props: {documentId: params.documentId}};
}

export default Document;