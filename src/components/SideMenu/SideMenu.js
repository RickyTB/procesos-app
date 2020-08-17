import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

import classes from './SideMenu.module.scss';

const SideMenu = () => {
    const router = useRouter();
    return (
        <aside className={`menu ${classes.SideMenu}`}>
            <p className="menu-label">
                Mi Cuenta
            </p>
            <ul className="menu-list">
                <li>
                    <Link href="/cuenta/ofertas">
                        <a className={clsx({"is-active": router.pathname === "/cuenta/ofertas"})}>Ofertas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cuenta/citas">
                        <a className={clsx({"is-active": router.pathname === "/cuenta/citas"})}>Citas</a>
                    </Link>
                </li>
                <li>
                    <Link href="/cuenta/documentos">
                        <a className={clsx({"is-active": router.pathname === "/cuenta/documentos"})}>Documentos</a>
                    </Link>
                </li>
            </ul>
        </aside>
    );
};

export default SideMenu;