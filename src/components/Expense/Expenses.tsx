import { ChangeEventHandler } from 'react';
import Card from '../UI/Card/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

interface ExpensesProps {
    children: JSX.Element[] 
    onFilterChange: ChangeEventHandler<HTMLSelectElement>
}

function Expenses({ children, onFilterChange }: ExpensesProps): JSX.Element {
    return (
        <div>
            <ExpensesFilter onValueChange={onFilterChange}/>
            <Card id='expenses' className="expenses">{children}</Card>
        </div>
    );
}

export default Expenses;