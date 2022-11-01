import { ValueChangeHandler } from '../../types/ValueChangeHandler';
import { Expense } from '../NewExpense/Expense';
import Card from '../UI/Card/Card';
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import './Expenses.css'
import ExpensesChart from './ExpensesChart';

interface ExpensesProps {
    onFilterChange: ValueChangeHandler<string>
    filterValue: string
    expences: Expense[]
}

function Expenses({ onFilterChange, filterValue, expences }: ExpensesProps): JSX.Element {
    return (
        <Card id='expenses' className="expenses">
            <ExpensesFilter onValueChange={onFilterChange} value={filterValue}/>
            <ExpensesChart expenses={expences}/>
            <ExpensesList>
                {expences.map(prop => (
                    <ExpenseItem 
                        {...prop}
                        key={prop.id}
                        id={prop.id as string}
                        date={prop.date as Date}
                    />
                ))}
            </ExpensesList>
        </Card>
    );
}

export default Expenses;