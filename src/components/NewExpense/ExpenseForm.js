import { useState } from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
   /*  const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('')
    const [dateAmount, setEnteredDate] = useState(''); */

    const [userInput, setUserInput] = useState({
        enteredTitle: '',
        enteredAmount: '',
        enteredDate: ''
    })

    const titleChangeHandler = (event) => {
        setUserInput(previous => {
            return {...previous, enteredTitle: event.target.value} 
         })
    };

    const amountChangeHandler = (event) => {
        /* ### IL SEGUENTE APPROCCIO NON è CORRETTO, PERCHE' NON ASSICURA DI PRENDERE L'ULTIMO VALORE AGGIORNATO */
        /* setUserInput({
            ...userInput,
            enteredAmount: event.target.value,
        }); */ 
        /* QUESTA IMPLEMENTAZIONE ASSICURA DI PRENDERE IL VALORE PRECEDENTE */
        setUserInput(previous => {
           return {...previous, enteredAmount: event.target.value} 
        })
    };
    
    const dateChangeHandler = (event) => {
        setUserInput(previous => {
            return {...previous, enteredDate: event.target.value} 
         })
    };

    const submitHandler = (event) => {
        event.preventDefault(); // con questo non si ricarica la pagina al SUBMIT
        setUserInput({
            enteredDate: '',
            enteredTitle: '',
            enteredAmount: ''
        })
        const updatedData = {
            title: userInput.enteredTitle,
            amount: userInput.enteredAmount,
            date: new Date(userInput.enteredDate),
        }
        console.log(updatedData, 'updatedData');
        props.onSaveExpenseData(updatedData);
       
    };

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="input" value={userInput.enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={userInput.enteredAmount} onChange={amountChangeHandler} />
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2019-01-01" max="2022-12-31" value={userInput.enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit">Add Expense</button>
        </div>
    </form>
};

export default ExpenseForm;