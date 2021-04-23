import React from 'react';
import styles from './Modal.module.css';
import ModalContainer from '../Containers/ModalContainer';
import styleButton from '../Form/Button.module.css';

const Modal = ({ message, closeModal }) => {
    return (
        <ModalContainer onClose={(e) => closeModal(e)}>
            <div className={styles.modal}>
                <div className={styles.modal__top}>
                    <h2>Invalid Input</h2>
                </div>
                <div className={styles.modal__bot}>
                    <p className={styles.modal__message}>{message}</p>
                    <button className={styleButton.button} onClick={(e) => closeModal(e)}>Close</button>
                </div>
            </div>
        </ModalContainer>
    );
};

export default Modal;
