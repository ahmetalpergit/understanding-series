import React, { useState, useRef } from 'react';
import Input from '../UI/Input';
import classes from './MealItemForm.module.css';

const MealItemForm = ({ id, onAddItem }) => {

    const [amountIsValid, setAmountIsValid] = useState(true);

    const inputAmountRef = useRef();

    const addItemToCart = (e) => {
        e.preventDefault();

        const inputAmount = inputAmountRef.current.value;

        if (inputAmount.trim() === '' || inputAmount < 1 || inputAmount > 5) {
            return setAmountIsValid(false);
        }
        onAddItem(+inputAmount);
        return setAmountIsValid(true);
    };

    return (
        <form className={classes.form} onSubmit={addItemToCart}>
            <Input
                ref={inputAmountRef}
                label="Amount"
                input={{
                    id: 'amount_' + id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }} />
            <button>+Add</button>
            {!amountIsValid && <p>Please enter a valid amount</p>}
        </form>
    );
};

export default MealItemForm;
