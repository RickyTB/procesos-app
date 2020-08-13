import React from 'react';

const OffersClosed = () => (
    <div className="notification is-danger is-light animated fadeIn">
        <div className="container">
            <div className="columns is-vcentered">
                <div className="column is-one-quarter">
                    <figure className="image">
                        <img src="/notify.svg" alt="Publicación cerrada"/>
                    </figure>
                </div>
                <div className="column">
                    <h3 className="title mb-2">La publicación de ofertas se encuentra cerrada</h3>
                    <p>No es posible publicar nuevas ofertas por el momento, por favor vuelve más tarde.</p>
                </div>
            </div>
        </div>
    </div>
);

export default OffersClosed;