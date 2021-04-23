import React, { useState } from 'react';
import Button from './Button';
import styles from './Form.module.css';


const Form = ({ getUserData, onInvalidInput }) => {

    const [user, setUser] = useState({ name: '', age: '' });

    const submitHandler = (e) => {
        e.preventDefault();
        //error handle if input checks out
        if (!checkValidInput(user)) return;
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

    function checkValidInput(user) {
        //check for empty inputs
        if (user.name === '' && user.age === '') {
            onInvalidInput('Please enter a username and age');
            return false;
        }
        //check for age only
        if (user.age === '' || +user.age < 0) {
            onInvalidInput('Please enter a valid age');
            return false;
        }
        //check for name only
        if (user.name === '' || user.name.trim().length === 0) {
            onInvalidInput('Please enter a valid name');
        }
        return true;
    }

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
