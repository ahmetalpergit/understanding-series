import React from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

function NewExpense({ onAddExpense }) {

    const addExpenseHandler = (expense) => {
        const expenseData = {
            ...expense,
            id: Math.random().toString()
        };

        onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            <ExpenseForm onSaveExpense={addExpenseHandler} />
        </div>
    );
}

export default NewExpense;
