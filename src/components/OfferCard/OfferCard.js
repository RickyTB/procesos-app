import React from 'react';
import moment from "moment";
import Link from "next/link";

const OfferCard = ({offer}) => {
    const publishedAt = moment(offer.publishedAt?.toDate() || new Date());

    return (
        <div className="card">
            <header className="card-header">
                <p className="card-header-title">
                    {offer.type}
                </p>
            </header>
            <div className="card-content">
                <div className="content">
                    <p>{offer.description}</p>
                    <p><strong>Años de uso: </strong>{offer.age}</p>
                    <strong>Publicación: </strong>
                    <time dateTime={publishedAt.format("YYYY-MM-dd")}>{publishedAt.format("lll")}</time>
                </div>
            </div>
            <footer className="card-footer">
                <Link href="/cuenta/ofertas/[offerId]" as={`/cuenta/ofertas/${offer.id}`}>
                    <a className="card-footer-item">Detalles</a>
                </Link>
            </footer>
        </div>
    );
};

export default OfferCard;