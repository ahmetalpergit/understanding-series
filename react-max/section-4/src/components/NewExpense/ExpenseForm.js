import React, { useState } from 'react';

import './ExpenseForm.css';

function ExpenseForm() {

    const [currentTitle, setCurrentTitle] = useState('');
    const [currentAmount, setCurrentAmount] = useState('');
    const [currentDate, setCurrentDate] = useState('');
    //const [userInput, setUserInput] = useState({
    //    currentTitle: '',
    //    currentAmount: '',
    //    currentDate: ''
    //});


    const titleChangeHandler = (e) => {
        setCurrentTitle(e.target.value);
        //setUserInput({
        //    ...userInput,
        //    currentTitle: e.target.value
        //});

        //setUserInput(prev => {
        //    return {
        //        ...userInput,
        //        currentTitle: e.target.value
        //    };
        //});
    };

    const amountChangeHandler = (e) => {
        setCurrentAmount(e.target.value);
        //setUserInput({
        //    ...userInput,
        //    currentAmount: e.target.value
        //});
    };

    const dateChangeHandler = (e) => {
        setCurrentDate(e.target.value);
        //setUserInput({
        //    ...userInput,
        //    currentDate: e.target.value
        //});
    };

    const logDataHandler = (e) => {
        e.preventDefault();

        const expenseData = {
            title: currentTitle,
            amount: currentAmount,
            date: new Date(currentDate),
        };

        setCurrentTitle('');
        setCurrentAmount('');
        setCurrentDate('');
        console.log(expenseData);
    };

    return (
        <form onSubmit={logDataHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label htmlFor="">Title</label>
                    <input type="text" value={currentTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Amount</label>
                    <input type="number" value={currentAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label htmlFor="">Date</label>
                    <input type="date" value={currentDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;
