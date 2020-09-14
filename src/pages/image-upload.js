import React, {useCallback, useEffect, useState} from 'react';
import {useDropzone} from "react-dropzone";
import axios from "axios";
import {useRouter} from "next/router";
import Cookies from "js-cookie";

import bonitaRequest from "../utils/bonita-request";
import {BONITA_URL} from "../utils/constants";
import showNotification from "../utils/show-notification";

const ImageUpload = () => {
    const {query} = useRouter();
    const [task, setTask] = useState(null);
    const [context, setContext] = useState(null);
    const [product, setProduct] = useState(null);
    const [url, setUrl] = useState(null);
    const onDrop = useCallback(acceptedFiles => {
        const [file] = acceptedFiles;
        if (!file) return;
        const formData = new FormData();
        formData.append("pbUpload0", file);
        axios.post(`/api/image`, formData)
            .then(response => response.data.url)
            .then(setUrl);
    }, [setUrl]);
    const {getRootProps, getInputProps} = useDropzone({onDrop});
    useEffect(() => {
        bonitaRequest(`API/bpm/userTask/${query?.id}/context`)
            .then(context => {
                setContext(context);
                return bonitaRequest(context.producto_ref.link);
            })
            .then(setProduct)
            .then(() => bonitaRequest(`API/bpm/userTask/${query?.id}`))
            .then(setTask)
            .catch(console.log);
    }, [query?.id]);
    const handleSubmit = useCallback(async () => {
        try {
            const {data: result} = await axios.post(`${BONITA_URL}/bonita/API/bpm/userTask/${query?.id}/execution`, {productoInput: {imagen: url}}, {
                headers: {
                    'X-Bonita-API-Token': Cookies.get("X-Bonita-API-Token")
                },
                withCredentials: true,
            });
            showNotification({
                type: "success",
                text: "¡Imagen guardada con éxito!"
            });
        } catch (e) {
            console.log(e);
            showNotification({
                type: "error",
                text: "Ocurrió un error en la comunicación con Bonita."
            });
        }
    }, [url, query?.id]);
    if (!task) return null;
    return (
        <div className="container">
            <section className="section">
                <h1 className="title is-1">{task.displayName}</h1>
                <h3 className="subtitle is-3">{product.nombre}</h3>
                <div {...getRootProps()}>
                    <img src={url || "/img-upload.svg"} alt="Sube tu imagen" className="image is-block my-0"
                         style={{margin: '0 auto'}}/>
                    {!url && (
                        <h4 className="has-text-centered">Selecciona una imagen</h4>
                    )}
                    <input {...getInputProps()}/>
                </div>
                <div className="has-text-centered my-5">
                    <button className="button is-success is-medium" disabled={!url} onClick={handleSubmit}>
                        Guardar imagen
                    </button>
                </div>
            </section>
        </div>
    );
};

export default ImageUpload;