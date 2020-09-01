import React from 'react';
import ReactStars from "react-rating-stars-component";

const Console = ({console}) => {
    return (
        <div className="card">
            <div className="card-image">
                <figure className="image is-16by9">
                    <img src={console.image} alt={console.name} style={{objectFit: "contain"}}/>
                </figure>
            </div>
            <div className="card-content">
                <div className="content has-text-centered" style={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
                    <p className="title is-3 mb-1">{console.name}</p>
                    <ReactStars count={5} size={32} activeColor="#ffd700" value={console.state / 2} edit={false} classNames="is-justified"/>
                    <button className="button is-primary is-medium mt-3">COMPRAR - ${console.price.toFixed(2)}</button>
                </div>
            </div>
        </div>
    );
};

export default Console;