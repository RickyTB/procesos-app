import React from 'react';
import Link from "next/link";

const OffersAuth = () => (
    <div className="box">
        <div className="columns">
            <div className="column is-one-quarter">
                <figure className="image">
                    <img src="/video_game_night.svg" alt="Image"/>
                </figure>
            </div>
            <div className="column">
                <div className="container">
                    <h3 className="title mb-3">Estamos recibiendo ofertas de consolas de videojuegos</h3>
                    <p className="mb-3">Para poder realizar una oferta debes identificarte, por favor regístrate o
                        inicia sesión si ya tienes una cuenta y luego regresa a esta página.</p>
                    <div className="buttons">
                        <Link href="/registro">
                            <a className="button is-primary">
                                Registrarme
                            </a>
                        </Link>
                        <Link href="/ingreso">
                            <a className="button is-primary is-light">
                                Iniciar sesión
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default OffersAuth;