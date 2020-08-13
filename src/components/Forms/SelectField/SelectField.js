import React from 'react';
import {useField} from "formik";
import clsx from "clsx";

const SelectField = ({label, id, className, children, ...props}) => {
    const [field, meta, helpers] = useField(props);
    const hasError = meta.touched && meta.error;
    return (
        <div className="field">
            <label className="label" htmlFor={id}>{label}</label>
            <div className="control">
                <div className={clsx("select", className, {"is-danger": hasError})}>
                    <select {...field} {...props} id={id}>
                        {children}
                    </select>
                </div>
            </div>
            {hasError ? (
                <p className="help is-danger">{meta.error}</p>
            ) : null}
        </div>
    );
};

export default SelectField;