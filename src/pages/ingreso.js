import React, {useState} from 'react';
import Head from "next/head";
import {Form, Formik} from "formik";
import axios from "axios";
import * as yup from "yup";

import TextField from "../components/Forms/TextField/TextField";
import firebase from "../firebase/clientApp";
import showNotification from "../utils/show-notification";
import useAuthProtection from "../hooks/use-auth-protection";
import {BONITA_URL} from "../utils/constants";

const initialValues = {
    email: "",
    password: "",
};

const LoginSchema = yup.object().shape({
    email: yup.string().email("Debes introducir un correo válido").required("Debes introducir tu correo electrónico"),
    password: yup.string().min(6, "Mínimo 6 caracteres").required("Debes introducir una contraseña"),
});

const Login = () => {
    useAuthProtection(false);

    const [loading, setLoading] = useState(false);

    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            await firebase.auth().signInWithEmailAndPassword(values.email, values.password);
            const params = new URLSearchParams();
            params.append("username", values.email);
            params.append("password", values.password);
            params.append("redirect", "false");
            await axios.post(`${BONITA_URL}/bonita/loginservice`, params, {
                withCredentials: true,
                headers: {'Content-Type': "application/x-www-form-urlencoded"}
            });
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
                <title>Iniciar sesión</title>
            </Head>
            <section className="hero is-fullheight-with-navbar is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns">
                            <div className="column">
                                <h1 className="title is-1 has-text-centered">Bienvenido de vuelta a</h1>
                                <figure className="has-text-centered mb-3">
                                    <img src="/tienda_friki_logo.png" alt="Logo"/>
                                </figure>
                                <h2 className="subtitle colored is-4">Los mejores artículos de tus: cómics,
                                    series, películas, libros, anime...</h2>
                            </div>
                            <div className="column">
                                <div className="box">
                                    <h1 className="title is-3 has-text-black mb-2">Inicio de sesión</h1>
                                    <p className="description mb-3">Por favor, introduce las credenciales con las que te
                                        registraste:</p>
                                    <Formik initialValues={initialValues}
                                            onSubmit={handleSubmit}
                                            validationSchema={LoginSchema}>
                                        {() => (
                                            <Form>
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
                                                    Iniciar sesión
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

export default Login;