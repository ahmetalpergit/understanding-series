import React from 'react';
import styles from './User.module.css';

const User = ({ name, age }) => {
    return (
        <div className={styles.user}>
            <h3>{name} ({age} years old)</h3>
        </div>
    );
};

export default User;
