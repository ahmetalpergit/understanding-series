import './ExpenseDate.css';

function ExpenseDate({ date }) {

    const longDate = date.toLocaleDateString('en-US', { month: 'long', year: 'numeric', day: '2-digit' }).replace(',', '');
    const [month, day, year] = longDate.split(' ');

    return (
        <div className="expense-date">
            <div className="expense-date__month">{month}</div>
            <div className="expense-date__day">{day}</div>
            <div className="expense-date__year">{year}</div>
        </div>
    );
}

export default ExpenseDate;
