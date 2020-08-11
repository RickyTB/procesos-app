import React, {useEffect} from 'react';
import Link from "next/link";

import {useUser} from "../../context/userContext";
import firebase from "../../firebase/clientApp";

const Navbar = () => {
    const {loadingUser, user} = useUser();

    useEffect(() => {
        if (!loadingUser) {
            // You know that the user is loaded: either logged in or out!
            console.log(user);
        }
        // You also have your firebase app initialized
        console.log(firebase);
    }, [loadingUser, user]);

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
                    <a className="navbar-item">
                        Publicar oferta
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">
                            More
                        </a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">
                                About
                            </a>
                            <a className="navbar-item">
                                Jobs
                            </a>
                            <a className="navbar-item">
                                Contact
                            </a>
                            <hr className="navbar-divider"/>
                            <a className="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
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
                </div>
            </div>
        </nav>
    );
};

export default Navbar;