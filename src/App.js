import { useState } from "react";
import Expenses from "./components/Expenses";
import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const DUMMY_EXPENSES = [
    { id: '1', title: 'Assicurazione', amount: '294.67', date: new Date(2021, 2, 28) },
    { id: '2', title: 'Alimentari', amount: '120.35', date: new Date(2020, 5, 18) },
    { id: '3', title: 'Luce', amount: '150.24', date: new Date(2020, 6, 12) },
    { id: '4', title: 'Abbonamento', amount: '30.00', date: new Date(2021, 3, 16) }
  ];
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  const newExpenseHandler = (newExpense) => {
    setExpenses(prevExpenses => {
      return [newExpense, ...prevExpenses];
    })
  };
  
  return (
    <div>
      <NewExpense onNewExpenseUpdated={newExpenseHandler}/>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
