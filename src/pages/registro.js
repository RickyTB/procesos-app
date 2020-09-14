import React, {useState} from 'react';
import Head from "next/head";
import {Form, Formik} from "formik";
import axios from 'axios';
import * as yup from 'yup';

import TextField from "../components/Forms/TextField/TextField";
import firebase from "../firebase/clientApp";
import showNotification from "../utils/show-notification";
import useAuthProtection from "../hooks/use-auth-protection";
import {BONITA_URL} from "../utils/constants";

const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
};

const SignupSchema = yup.object().shape({
    firstName: yup.string().required("Debes introducir tu nombre"),
    lastName: yup.string().required("Debes introducir tu apellido"),
    email: yup.string().email("Debes introducir un correo válido").required("Debes introducir tu correo electrónico"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Debes introducir una contraseña"),
});

const Signup = () => {
    useAuthProtection(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await firebase.auth().createUserWithEmailAndPassword(values.email, values.password);
            const {data: bonitaUser} = await axios.post('/api/bonita-signup', values);
            const user = firebase.auth().currentUser;
            await user.updateProfile({displayName: `${values.firstName} ${values.lastName}`});
            const db = firebase.firestore();
            await db.collection("users").doc(user.uid).set({bonitaId: bonitaUser.id});
            const params = new URLSearchParams();
            params.append("username", values.email);
            params.append("password", values.password);
            params.append("redirect", "false");
            await axios.post(`${BONITA_URL}/bonita/loginservice`, params, {
                withCredentials: true,
                headers: {'Content-Type': "application/x-www-form-urlencoded"}
            });
            location.href = "/";
        } catch (error) {
            showNotification({
                text: error.message,
                timeout: 3000,
                type: "error"
            });
        }
        setLoading(false);
    };

    return (
        <>
            <Head>
                <title>Registro</title>
            </Head>
            <section className="hero is-fullheight-with-navbar is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title is-1 has-text-centered">Bienvenido a</h1>
                                <figure className="has-text-centered mb-3">
                                    <img src="/tienda_friki_logo.png" alt="Logo"/>
                                </figure>
                                <h2 className="subtitle colored is-4">Los mejores artículos de tus: cómics,
                                    series, películas, libros, anime...</h2>
                                <p>Con una cuenta podrás comprar artículos y ofertar los tuyos.</p>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <h1 className="title is-3 has-text-black mb-2">Registro de usuario</h1>
                                    <p className="description mb-3">Por favor, completa los siguientes datos:</p>
                                    <Formik initialValues={initialValues}
                                            onSubmit={handleSubmit}
                                            validationSchema={SignupSchema}>
                                        {() => (
                                            <Form>
                                                <TextField id="form-name"
                                                           label="Nombre"
                                                           className="is-medium"
                                                           name="firstName"
                                                           type="text"
                                                           placeholder="Nombre"/>
                                                <TextField id="form-last-name"
                                                           label="Apellido"
                                                           className="is-medium"
                                                           name="lastName"
                                                           type="text"
                                                           placeholder="Apellido"/>
                                                <TextField id="form-email"
                                                           label="Correo electrónico"
                                                           className="is-medium"
                                                           name="email"
                                                           type="email"
                                                           placeholder="Correo electrónico"/>
                                                <TextField id="form-password"
                                                           label="Contraseña"
                                                           className="is-medium"
                                                           name="password"
                                                           type="password"
                                                           placeholder="Contraseña"/>
                                                <button className="button is-block is-primary is-fullwidth is-medium"
                                                        type="submit"
                                                        disabled={loading}>
                                                    Crear cuenta
                                                </button>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Signup;