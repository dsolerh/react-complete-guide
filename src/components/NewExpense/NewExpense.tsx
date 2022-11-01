import { useState } from 'react';
import { ValueChangeHandler } from '../../types/ValueChangeHandler';
import { Expense } from './Expense';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

interface NewExpenseProps {
    onNewExpense: ValueChangeHandler<Expense>
}

function NewExpense({ onNewExpense }: NewExpenseProps) {
    const [showForm, setShowForm] = useState(false);

    function saveExpenseDataHandler(data: Expense) {
        data = { ...data, id: Math.random().toString() }
        onNewExpense(data)
        setShowForm(false)
    }

    const content = showForm
        ? <ExpenseForm onDataSave={saveExpenseDataHandler} onCancel={()=>setShowForm(false)} />
        : <button onClick={() => setShowForm(true)}>Add New Expense</button>;
    return (
        <div className='new-expense'>
            {content}
        </div>
    );
}

export default NewExpense;