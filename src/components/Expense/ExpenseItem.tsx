import Card from '../UI/Card/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

export interface ExpenseProps {
    id: string
    date: Date
    title: string
    amount: number
}

function ExpenseItem({ id, date, title, amount }: ExpenseProps): JSX.Element {
    return (
        <li>
            <Card id={id} className='expense-item'>
                <ExpenseDate date={date}></ExpenseDate>
                <div className='expense-item__description'>
                    <h2>{title}</h2>
                    <div className='expense-item__price'>${amount}</div>
                </div>
            </Card>
        </li>
    );
}

export default ExpenseItem