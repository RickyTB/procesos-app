import React, {useState} from 'react';
import {Form, Formik} from "formik";
import * as yup from 'yup';
import clsx from "clsx";
import axios from "axios";
import Cookies from 'js-cookie'

import SelectField from "../Forms/SelectField/SelectField";
import TextAreaField from "../Forms/TextAreaField/TextAreaField";
import TextField from "../Forms/TextField/TextField";
import firebase from "../../firebase/clientApp";
import {useUser} from "../../context/userContext";
import {BONITA_URL} from "../../utils/constants";
import {findProcess} from "../../utils/common-requests";
import OfferSent from "../OfferSent/OfferSent";

const initialValues = {
    type: "",
    description: "",
    age: ""
};

const CONSOLE_TYPES = [
    "NES",
    "SNES",
    "Nintendo 64",
    "Nintendo Gamecube",
    "Nintendo Wii",
    "Nintendo WiiU",
    "Nintendo Switch",
    "PlayStation",
    "PlayStation 2",
    "PlayStation 3",
    "PlayStation 4",
    "Xbox",
    "Xbox 360",
    "Xbox One",
];

const OfferSchema = yup.object().shape({
    type: yup.string().oneOf(CONSOLE_TYPES).required("Elige el tipo de consola"),
    description: yup.string().required("Debes ingresar una descripción"),
    age: yup.number().integer("Ingresa un número entero").min(0, "La edad debe ser positiva").required("Ingresa un número")
});

const OffersOpen = () => {
    const [loading, setLoading] = useState(false);
    const [sent, setSent] = useState(false);
    const {user} = useUser();
    const handleSubmit = async (values) => {
        setLoading(true);
        try {
            const publishProcess = await findProcess("CompraDeConsola", Cookies.get("X-Bonita-API-Token"));
            const {data: bpmCase} = await axios.post(`${BONITA_URL}/bonita/API/bpm/case`, {"processDefinitionId": publishProcess.id}, {
                headers: {
                    'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
                },
                withCredentials: true,
            });
            const db = firebase.firestore();
            await db.collection("users").doc(user.uid).collection("offers").add({
                ...values,
                caseId: bpmCase.id,
                publishedAt: new Date()
            });
            const {data: tasks} = await axios.get(`${BONITA_URL}/bonita/API/bpm/humanTask?p=0&c=10&f=rootCaseId=${bpmCase.id}`, {
                headers: {
                    'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
                },
                withCredentials: true,
            });
            await axios.post(`${BONITA_URL}/bonita/API/bpm/userTask/${tasks[0].id}/execution`, {
                "ofertaInput": {
                    "descripcion": values.description,
                    "tipo": values.type,
                    "edad": values.age,
                }
            }, {
                headers: {
                    'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
                },
                withCredentials: true,
            });
            setSent(true);
        } catch (e) {
            console.log(e);
        }
        setLoading(false);
    };
    return (
        <div className="box animated fadeIn">
            <div className="columns is-vcentered">
                <div className="column is-one-quarter">
                    <figure className="image">
                        <img src="/video_game_night.svg" alt="Image"/>
                    </figure>
                </div>
                <div className="column">
                    {sent ? <OfferSent/> : (
                        <>
                            <h3 className="title">¡Estamos recibiendo ofertas de consolas de videojuegos!</h3>
                            <h5 className="subtitle">Completa los datos de tu consola</h5>
                            <Formik onSubmit={handleSubmit} initialValues={initialValues}
                                    validationSchema={OfferSchema}>
                                {({isValid}) => (
                                    <Form className="form">
                                        <SelectField id="form-type" label="Modelo" name="type">
                                            <option>Elige el modelo</option>
                                            {CONSOLE_TYPES.map(type => <option value={type} key={type}>{type}</option>)}
                                        </SelectField>
                                        <TextAreaField id="form-description"
                                                       label="Descripción"
                                                       placeholder="Descripción o detalles que debamos tomar en cuenta"
                                                       name="description"/>
                                        <TextField id="form-age"
                                                   label="Años de uso"
                                                   placeholder="Ej: 3"
                                                   name="age"
                                                   type="number"/>
                                        <div className="field">
                                            <button className={clsx("button is-primary", {"is-loading": loading})}
                                                    disabled={!isValid || loading}
                                                    type="submit">
                                                Publicar oferta
                                            </button>
                                        </div>
                                    </Form>
                                )}
                            </Formik>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OffersOpen;