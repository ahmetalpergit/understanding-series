import './ExpenseItem.css';

function ExpenseItem({
    title, amount, date
}) {
    // const expenseDate = new Date(2021, 3, 12);
    // const expenseTitle = 'Car Insurance';
    // const expensePrice = 294.67;

    return (
        <div className="expense-item">
            <div>{date.toLocaleDateString()}</div>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${amount}</div>
            </div>
        </div>
    );
}

export default ExpenseItem;