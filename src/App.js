import ExpenseItem from './components/ExpenseItem';


function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 299.99, date: new Date(2021, 2, 28) },
    { title: 'Bills', amount: 299.99, date: new Date(2021, 2, 28) },
    { title: 'Car Insurance', amount: 299.99, date: new Date(2021, 2, 28) }
  ]

  return (
    <div>
      <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
      <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
      <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[1].date}></ExpenseItem>

      <p></p>
    </div>
  );
}

export default App;
