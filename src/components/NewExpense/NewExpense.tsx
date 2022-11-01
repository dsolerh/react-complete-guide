import { Expense } from './Expense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

interface NewExpenseProps {
    onNewExpense: (e: Expense) => void
}

function NewExpense({ onNewExpense }: NewExpenseProps) {
    function saveExpenseDataHandler(data: Expense) {
        data = { ...data, id: Math.random().toString() }
        onNewExpense(data)
    }
    return (
        <div className='new-expense'>
            <ExpenseForm onDataSave={saveExpenseDataHandler} />
        </div>
    );
}

export default NewExpense;