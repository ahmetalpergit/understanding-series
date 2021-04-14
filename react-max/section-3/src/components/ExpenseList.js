import Card from './Card';
import ExpenseItem from "./ExpenseItem";
import './ExpenseList.css';

function ExpenseList({
    expenses
}) {
    return (
        <Card className="expenses">
            {expenses.map(exp => <ExpenseItem key={exp.id} {...exp} />)}
        </Card>
    );
}

export default ExpenseList;
