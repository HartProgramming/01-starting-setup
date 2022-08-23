import Expenses from './components/Expenses';

function App() {
  const expenses = [
    { title: 'Toilet Paper', amount: 299.99, date: new Date(2021, 2, 28) },
    { title: 'Bills', amount: 299.99, date: new Date(2021, 2, 28) },
    { title: 'Car Insurance', amount: 299.99, date: new Date(2021, 2, 28) }
  ]

  return (
    <Expenses item={expenses}/>
  );
}

export default App;
