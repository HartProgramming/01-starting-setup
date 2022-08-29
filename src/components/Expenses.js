import { useState } from 'react';

import './Expenses.css';
import ExpenseItem from './ExpenseItem';
import Card from './Card'
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2020');


    const filterChangedHandler = selectedYear => {
        setFilteredYear(selectedYear)
        console.log('Expenses');
        console.log(selectedYear);
    }

    return (
        <div>
            <Card className='expenses'>
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangedHandler}/>
                {props.item.map(expense => <ExpenseItem title={expense.title} amount={expense.amount} date={expense.date}/>)}
            </Card>
        </div>
    )
}

export default Expenses;