import React, { useState } from 'react';
import Button from './Button';
import styles from './Form.module.css';


const Form = ({ getUserData, onInvalidInput }) => {

    const [user, setUser] = useState({ name: '', age: '' });

    const submitHandler = (e) => {
        e.preventDefault();
        if (user.name === '' || user.age === '') return onInvalidInput();
        getUserData(user);
        setUser({ name: '', age: '' });
    };

    const userNameHandler = (e) => {
        setUser(prev => {
            return { ...prev, name: e.target.value };
        });
    };

    const userAgeHandler = (e) => {
        setUser(prev => {
            return { ...prev, age: e.target.value };
        });
    };

    return (
        <form className={styles.form} onSubmit={submitHandler}>
            <div className={styles.form__input}>
                <label>Username</label>
                <input type="text" onChange={userNameHandler} value={user.name} />
            </div>
            <div className={styles.form__input}>
                <label>Age</label>
                <input type="number" onChange={userAgeHandler} value={user.age} />
            </div>
            <Button title="Add User" />
        </form>
    );
};

export default Form;
