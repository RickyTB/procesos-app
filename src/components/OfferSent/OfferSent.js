import React from 'react';
import Link from "next/link";

const OfferSent = () => {
    return (
        <>
            <h3 className="title">¡Oferta publicada!</h3>
            <h5 className="subtitle">Gracias por publicar tu oferta, te avisaremos por correo si nos interesa.</h5>
            <p>También puedes ver los detalles de tu oferta en tu cuenta: <Link href="/cuenta/ofertas"><a>Mis Ofertas</a></Link></p>
        </>
    );
};

export default OfferSent;