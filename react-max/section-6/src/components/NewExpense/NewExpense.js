import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense }) {

    const [addExpense, setAddExpense] = useState(false);

    const submitExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
        toggleExpenseHandler();
    };

    function toggleExpenseHandler() {
        setAddExpense(prev => !prev);
    };

    return (
        <div className="new-expense">
            {addExpense ? <ExpenseForm onSaveExpense={submitExpenseHandler} onCancel={toggleExpenseHandler} /> : <button onClick={toggleExpenseHandler}>Add New Expense</button>}
        </div>
    );
}

export default NewExpense;
