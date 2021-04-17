import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {

    const [currentTitle, setCurrentTitle] = useState('');
    const [currentAmount, setCurrentAmount] = useState('');
    const [currentDate, setCurrentDate] = useState('');

    const titleChangeHandler = (e) => {
        setCurrentTitle(e.target.value);
    };

    const amountChangeHandler = (e) => {
        setCurrentAmount(e.target.value);
    };

    const dateChangeHandler = (e) => {
        setCurrentDate(e.target.value);
    };

    return (
        <form>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
