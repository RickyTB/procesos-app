import React, {useCallback, useState} from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";
import Cookies from "js-cookie";
import clsx from "clsx";

import {useUser} from "../../context/userContext";
import firebase from "../../firebase/clientApp";
import {BONITA_URL} from "../../utils/constants";

const Navbar = () => {
    const {loadingUser, user} = useUser();
    const [menuOpen, setMenuOpen] = useState(false);
    const handleSignOut = useCallback(async () => {
        try {
            await firebase.auth().signOut();
            await axios.get(`${BONITA_URL}/bonita/logoutservice`,
                {
                    withCredentials: true,
                    headers: {
                        'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
                    },
                });
        } catch (e) {
            Cookies.remove('X-Bonita-API-Token')
            console.log(e);
        }
    }, []);
    const toggleMenu = useCallback(() => setMenuOpen(m => !m), []);
    return (
        <nav className="navbar is-black is-fixed-top has-shadow" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link href="/">
                    <a className="navbar-item">
                        <img src="/tienda_friki_logo.png" height="28" alt="Tienda Friki Logo"/>
                    </a>
                </Link>
                <a role="button"
                   className={clsx("navbar-burger burger", {"is-active": menuOpen})}
                   onClick={toggleMenu}
                   aria-label="menu"
                   aria-expanded="false"
                   data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            <div id="navbarBasicExample" className={clsx("navbar-menu", {"is-active": menuOpen})}>
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