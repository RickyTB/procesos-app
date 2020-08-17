import React, {useCallback} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useUser} from "../../context/userContext";
import firebase from "../../firebase/clientApp";

const Navbar = () => {
    const {loadingUser, user} = useUser();
    const handleSignOut = useCallback(async () => firebase.auth().signOut(), []);
    return (
        <nav className="navbar is-black is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">
                        <img src="/tienda_friki_logo.png" height="28" alt="Tienda Friki Logo"/>
                    </a>
                </Link>
                <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className="navbar-menu">
                <div className="navbar-start">
                    <Link href="/">
                        <a className="navbar-item">
                            Productos
                        </a>
                    </Link>
                    <Link href="/ofertar">
                        <a className="navbar-item">
                            Publicar oferta
                        </a>
                    </Link>
                </div>
                <div className="navbar-end">
                    {loadingUser ? (
                        <div className="navbar-item">
                            <FontAwesomeIcon icon="circle-notch" spin/>
                        </div>
                    ) : user ? (
                        <>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <Link href="/cuenta">
                                    <a className="navbar-link">
                                        {user.displayName || "Mi Cuenta"}
                                    </a>
                                </Link>
                                <div className="navbar-dropdown">
                                    <Link href="/cuenta/ofertas">
                                        <a className="navbar-item">
                                            Ofertas
                                        </a>
                                    </Link>
                                    <Link href="/cuenta/citas">
                                        <a className="navbar-item">
                                            Citas
                                        </a>
                                    </Link>
                                    <Link href="/cuenta/documentos">
                                        <a className="navbar-item">
                                            Documentos
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <a className="navbar-item" onClick={handleSignOut} title="Cerrar sesión">
                                <FontAwesomeIcon icon="sign-out-alt"/>
                            </a>
                        </>
                    ) : (
                        <div className="navbar-item">
                            <div className="buttons">
                                <Link href="/registro">
                                    <a className="button is-primary">
                                        Registrarse
                                    </a>
                                </Link>
                                <Link href="/ingreso">
                                    <a className="button is-light">
                                        Iniciar sesión
                                    </a>
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;