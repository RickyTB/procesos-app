import React, {useCallback, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import axios from "axios";
import Cookies from "js-cookie";

import {BONITA_URL} from "../../utils/constants";
import showNotification from "../../utils/show-notification";

const CostCard = ({task, onSubmit}) => {
    const [value, setValue] = useState("");
    const handleChange = useCallback((e) => setValue(e.target.value), []);
    const [loading, setLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        await axios.post(`${BONITA_URL}/bonita/API/bpm/userTask/${task.id}/execution`, {"ofertaInput": {"costo": value}}, {
            headers: {
                'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
            },
            withCredentials: true,
        });
        showNotification({
            type: "success",
            text: "¡El precio se envió correctamente!"
        })
        setLoading(false);
        onSubmit();
    };
    return (
        <div className="box">
            <h3 className="title is-3">¡Nos interesa tu consola!</h3>
            <p className="mb-3">Tu consola pasó todos los controles de calidad de Tienda Friki, por favor introduce el
                precio por el que
                estás interesado en venderla:</p>
            <form onSubmit={handleSubmit}>
                <div className="field">
                    <div className="control has-icons-left">
                        <input className="input"
                               type="number"
                               placeholder="Ej: 2.50"
                               step="0.25"
                               min="0"
                               max="1000000"
                               required
                               value={value}
                               onChange={handleChange}/>
                        <span className="icon is-small is-left">
                            <FontAwesomeIcon icon="dollar-sign"/>
                        </span>
                    </div>
                </div>
                <button className={clsx("button is-primary", {"is-loading": loading})}>Enviar precio</button>
            </form>
        </div>
    );
};

export default CostCard;