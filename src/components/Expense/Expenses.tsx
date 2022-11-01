import { ValueChangeHandler } from '../../types/ValueChangeHandler';
import Card from '../UI/Card/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';

interface ExpensesProps {
    children: JSX.Element[] 
    onFilterChange: ValueChangeHandler<string>
    filterValue: string
}

function Expenses({ children, onFilterChange, filterValue }: ExpensesProps): JSX.Element {
    return (
        <div>
            <ExpensesFilter onValueChange={onFilterChange} value={filterValue}/>
            <Card id='expenses' className="expenses">{children}</Card>
        </div>
    );
}

export default Expenses;