import React from 'react';
import {useField} from "formik";
import clsx from "clsx";

const TextField = ({label, id, className, ...props}) => {
    const [field, meta, helpers] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <div className="field">
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <input className={clsx("input", className, {"is-danger": hasError})} {...field} {...props} id={id}/>
            </div>
            {hasError ? (
                <p className="help is-danger">{meta.error}</p>
            ) : null}
        </div>
    );
};

export default TextField;