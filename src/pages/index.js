import React from 'react';
import Head from 'next/head';

import Consoles from "../components/Consoles/Consoles";

export default function Home() {
    return (
        <>
            <Head>
                <title>Tienda Friki</title>
            </Head>
            <section className="hero is-primary is-bold">
                <div className="hero-body">
                    <div className="container">
                        <div className="columns is-vcentered">
                            <div className="column has-text-centered">
                                <img src="/tienda_friki_logo.png" alt="Logo"/>
                            </div>
                            <div className="column">
                                <h1 className="title">
                                    Primary bold title
                                </h1>
                                <h2 className="subtitle">
                                    Primary bold subtitle
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section">
                <h1 className="title is-1 is-spaced">Productos a la venta</h1>
                <h3 className="subtitle is-3">Consolas</h3>
                <Consoles/>
            </section>
        </>
    );
}
