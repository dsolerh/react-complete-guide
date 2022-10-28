function ExpenseDate({ date }: { date: Date }): JSX.Element {
    const month = date.toLocaleString('en-US', { month: 'long' }),
        day = date.toLocaleString('en-US', { day: '2-digit' }),
        year = date.toLocaleString('en-US', { year: '2-digit' })
        
    return (
        <div>
            <div>{month}</div>
            <div>{day}</div>
            <div>{year}</div>
        </div>
    );
}

export default ExpenseDate;