import { ChangeEventHandler, FormEvent, useState } from 'react';
import { ValueChangeHandler } from '../../types/ValueChangeHandler';
import { Expense } from './Expense';
import './ExpenseForm.css'

interface ExpenseFormProps {
    onTitleChange?: ChangeEventHandler<HTMLInputElement>
    onAmountChange?: ChangeEventHandler<HTMLInputElement>
    onDateChange?: ChangeEventHandler<HTMLInputElement>
    onDataSave?: ValueChangeHandler<Expense>
    onCancel?: () => void

}

function ExpenseForm({ onTitleChange, onAmountChange, onDateChange, onDataSave, onCancel }: ExpenseFormProps): JSX.Element {
    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0.01);
    const [date, setDate] = useState('');

    function Submit(e: FormEvent) {
        e.preventDefault()
        // alert(JSON.stringify({title,amount,date}))
        onDataSave && onDataSave({ title, amount, date })
    }

    return (
        <form onSubmit={Submit}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text"
                        onChange={(e) => { setTitle(e.target.value); onTitleChange && onTitleChange(e); }}
                        value={title} />
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" min="0.01" step="0.01"
                        onChange={(e) => { setAmount(parseInt(e.target.value)); onAmountChange && onAmountChange(e); }}
                        value={amount} />
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min="2019-01-01" max="2022-12-31"
                        onChange={(e) => { setDate(e.target.value); onDateChange && onDateChange(e); }}
                        value={date} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type='button' onClick={onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );

}

export default ExpenseForm;