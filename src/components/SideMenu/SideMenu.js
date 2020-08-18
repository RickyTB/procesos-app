import React from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import clsx from "clsx";

import classes from './SideMenu.module.scss';
import useOffers from "../../hooks/use-offers";

const SideMenu = () => {
    const router = useRouter();
    const [offers] = useOffers();
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
                    {offers.length > 0 && (
                        <ul>
                            {offers.map(offer => (
                                <li key={offer.id}>
                                    <Link href="/cuenta/ofertas/[offerId]" as={`/cuenta/ofertas/${offer.id}`}>
                                        <a className={clsx({"is-active": router.asPath === `/cuenta/ofertas/${offer.id}`})}>{offer.type}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
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