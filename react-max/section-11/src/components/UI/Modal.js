import React from 'react';
import ReactDOM from 'react-dom';
import classes from './Modal.module.css';

const Backdrop = () => {
    return <div className={classes.backdrop}></div>;
};

const ModalOverlay = ({ children }) => {
    return (
        <div className={classes.modal}>
            {children}
        </div>
    );
};

const portalElement = document.getElementById('overlay');

const Modal = ({ children }) => {
    return (
        <>
            {ReactDOM.createPortal(<Backdrop />, portalElement)}
            {ReactDOM.createPortal(<ModalOverlay>{children}</ModalOverlay>, portalElement)}
        </>
    );
};

export default Modal;
