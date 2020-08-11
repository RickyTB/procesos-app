import React from 'react';
import Head from "next/head";

const Signup = () => {
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
                                    <form>
                                        <div className="field">
                                            <label className="label">Nombre</label>
                                            <div className="control">
                                                <input className="input is-medium" type="text" placeholder="Nombre"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Apellido</label>
                                            <div className="control">
                                                <input className="input is-medium" type="text" placeholder="Apellido"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Correo electrónico</label>
                                            <div className="control">
                                                <input className="input is-medium" type="email"
                                                       placeholder="Correo electrónico"/>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <label className="label">Contraseña</label>
                                            <div className="control">
                                                <input className="input is-medium" type="password"
                                                       placeholder="Contraseña"/>
                                            </div>
                                        </div>
                                        <button className="button is-block is-primary is-fullwidth is-medium">
                                            Crear cuenta
                                        </button>
                                    </form>
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