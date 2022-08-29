import { useState } from 'react';

import Expenses from './components/Expenses';

import NewExpense from './components/NewExpense/NewExpense';

const DummyExpenses = [
  { title: 'Toilet Paper', amount: 299.99, date: new Date(2021, 2, 28) },
  { title: 'Bills', amount: 299.99, date: new Date(2021, 2, 28) },
  { title: 'Car Insurance', amount: 299.99, date: new Date(2021, 2, 28) }
]


function App() {

  const [expenses, setExpenses] = useState(DummyExpenses);

  const addExpenseHandler = (expense) => {
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses]
    })
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
