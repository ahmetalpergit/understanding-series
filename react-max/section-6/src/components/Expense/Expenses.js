import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css';
import ExpenseChart from './ExpenseChart';

function Expenses({ expenses }) {

    const [year, setYear] = useState('');

    const yearChangeHandler = (receivedYear) => {
        setYear(+receivedYear);
    };

    const filteredExpenses = year ? expenses.filter(exp => exp.date.getFullYear() === year) : expenses;

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler} selected={year} />
            <ExpenseChart expenses={filteredExpenses} />
            <ExpensesList expenses={filteredExpenses} />
        </Card>
    );
}

export default Expenses;
