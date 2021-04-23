import React from 'react';
import styles from './CardContainer.module.css';

const CardContainer = ({ children }) => {
    return (
        <div className={styles['card-container']}>
            {children}
        </div>
    );
};

export default CardContainer;
