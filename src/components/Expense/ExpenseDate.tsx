import './ExpenseDate.css'

function ExpenseDate({ date }: { date: Date }): JSX.Element {
    const month = date.toLocaleString('en-US', { month: 'long' }),
        day = date.toLocaleString('en-US', { day: '2-digit' }),
        year = date.toLocaleString('en-US', { year: 'numeric' })
        
    return (
        <div className='expense-date'>
            <div className='expense-date__month'>{month}</div>
            <div className='expense-date__year'>{year}</div>
            <div className='expense-date__day'>{day}</div>
        </div>
    );
}

export default ExpenseDate;