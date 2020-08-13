import React from 'react';
import {Form, Formik} from "formik";

import SelectField from "../Forms/SelectField/SelectField";
import TextAreaField from "../Forms/TextAreaField/TextAreaField";
import TextField from "../Forms/TextField/TextField";

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

const OffersOpen = () => {
    const handleSubmit = async (values) => {
        console.log(values);
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
                    <h3 className="title">¡Estamos recibiendo ofertas de consolas de videojuegos!</h3>
                    <h5 className="subtitle">Completa los datos de tu consola</h5>
                    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
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
                                    <button className="button is-primary" disabled={!isValid}>Publicar oferta</button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default OffersOpen;