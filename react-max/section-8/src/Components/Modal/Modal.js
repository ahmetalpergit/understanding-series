import React from 'react';
import styles from './Modal.module.css';
import ModalContainer from '../Containers/ModalContainer';
import styleButton from '../Form/Button.module.css';

const Modal = ({ message, closeModal }) => {
    return (
        <ModalContainer onClose={(e) => closeModal(e)}>
            <div className={styles.modal}>
                <p>{message}</p>
                <button className={styleButton.button} onClick={(e) => closeModal(e)}>Close</button>
            </div>
        </ModalContainer>
    );
};

export default Modal;
