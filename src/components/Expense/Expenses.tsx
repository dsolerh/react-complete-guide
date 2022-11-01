import { ContainerComponent } from '../../types/Components';
import { ValueChangeHandler } from '../../types/ValueChangeHandler';
import Card from '../UI/Card/Card';
import './Expenses.css'
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

interface ExpensesProps extends ContainerComponent {
    onFilterChange: ValueChangeHandler<string>
    filterValue: string
}

function Expenses({ children, onFilterChange, filterValue }: ExpensesProps): JSX.Element {
    return (
        <Card id='expenses' className="expenses">
            <ExpensesFilter onValueChange={onFilterChange} value={filterValue}/>
            <ExpensesList>
                {children}
            </ExpensesList>
        </Card>
    );
}

export default Expenses;