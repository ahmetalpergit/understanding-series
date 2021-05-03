import React, { useRef, useImperativeHandle } from 'react';
import classes from '../../Login/Login.module.css';

const Input = React.forwardRef(({ type, id, value, onChange, onBlur, label, isValid }, ref) => {

    const inputRef = useRef();

    const activate = () => {
        inputRef.current.focus();
    };

    useImperativeHandle(
        ref,
        () => {
            return {
                focus: activate
            };
        }
    );

    return (
        <div className={`${classes.control} ${isValid === false ? classes.invalid : ''}`}>
            <label htmlFor={type}>{label}</label>
            <input
                ref={inputRef}
                type={type}
                id={id}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
            />
        </div>
    );
});

export default Input;
