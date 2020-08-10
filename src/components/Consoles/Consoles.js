import React from 'react';

import Console from "./Console/Console";

const Consoles = () => {
    return (
        <div className="columns is-multiline">
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
            <div className="column is-3">
                <Console/>
            </div>
        </div>
    );
};

export default Consoles;