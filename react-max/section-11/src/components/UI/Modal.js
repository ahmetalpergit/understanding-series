import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = ({ onClick }) => {
    return <div className={classes.backdrop} onClick={onClick}></div>;
};

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            {children}
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ children, onClose }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop onClick={onClose} />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;
