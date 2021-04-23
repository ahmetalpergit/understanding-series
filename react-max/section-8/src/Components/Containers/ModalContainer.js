import React from 'react';
import styles from './ModalContainer.module.css';

const ModalContainer = ({ children, onClose }) => {
    return (
        <div className={styles['modal-container']} onClick={(e) => onClose(e)}>
            {children}
        </div>
    );
};

export default ModalContainer;
