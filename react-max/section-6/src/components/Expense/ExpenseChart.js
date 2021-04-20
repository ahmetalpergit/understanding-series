import React from 'react';
import Chart from '../Chart/Chart';

const ExpenseChart = ({ expenses }) => {

    const chartDataPoints = [
        { label: 'jan', value: 0 },
        { label: 'feb', value: 0 },
        { label: 'mar', value: 0 },
        { label: 'apr', value: 0 },
        { label: 'may', value: 0 },
        { label: 'jun', value: 0 },
        { label: 'jul', value: 0 },
        { label: 'aug', value: 0 },
        { label: 'sep', value: 0 },
        { label: 'oct', value: 0 },
        { label: 'nov', value: 0 },
        { label: 'dec', value: 0 },
    ];

    expenses.forEach(el => {
        const monthIndex = el.date.getMonth();
        chartDataPoints[monthIndex].value += el.amount;
    });

    const arrayOfValues = chartDataPoints.map(el => el.value);
    const maxLimit = Math.max(...arrayOfValues);

    return (
        <div>
            <Chart dataPoints={chartDataPoints} max={maxLimit} />
        </div>
    );
};

export default ExpenseChart;
