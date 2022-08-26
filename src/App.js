import Expenses from './components/Expenses';

import NewExpense from './components/NewExpense/NewExpense';


function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 299.99, date: new Date(2021, 2, 28) },
    { title: 'Bills', amount: 299.99, date: new Date(2021, 2, 28) },
    { title: 'Car Insurance', amount: 299.99, date: new Date(2021, 2, 28) }
  ]

  const addExpenseHandler = (expense) => {
    console.log('In App.js')
    console.log(expense)
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses} />
    </div>
  );
}

export default App;
