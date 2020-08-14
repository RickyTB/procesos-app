import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import useOffers from "../../hooks/use-offers";

const MyOffers = () => {
    const [offers, loading] = useOffers();
    if (loading) return (
        <p className="has-text-primary has-text-centered">
            <FontAwesomeIcon icon="circle-notch" size="3x" spin/>
        </p>
    );
    return (
        <div>
            {JSON.stringify(offers)}
        </div>
    );
};

export default MyOffers;