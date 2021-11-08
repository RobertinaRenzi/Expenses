import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card';
import ExpensesFilter from './ExpensesFilter';
import { useState } from 'react';

const  Expenses = (props) => {
    const [year, setYear] = useState('2021');
    const onChangeHandler = (val) => {
        setYear(val);
    };
    const filteredExpenses = props.expenses.filter(el => {return el.date.getFullYear().toString() === year});
   
    return (
        <Card className="expenses">
            <ExpensesFilter selected={year} onChangeYear={onChangeHandler}/>
            {filteredExpenses.map(expense => {
                return <ExpenseItem
                    key={expense.id}
                    title={expense.title}
                    amount={expense.amount}
                    date={expense.date}/>
            })}
        </Card>
       );
}
export default Expenses;