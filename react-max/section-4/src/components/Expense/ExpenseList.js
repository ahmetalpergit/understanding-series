import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from './ExpensesFilter';
import './ExpenseList.css';

function ExpenseList({ expenses }) {

    const [year, setYear] = useState('');

    const yearChangeHandler = (receivedYear) => {
        setYear(receivedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter onYearChange={yearChangeHandler} selected={year} />
            {expenses.map(exp => <ExpenseItem key={exp.id} {...exp} />)}
        </Card>
    );
}

export default ExpenseList;
