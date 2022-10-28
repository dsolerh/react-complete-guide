import './Expenses.css'

function Expenses({ children }: { children: JSX.Element[] }) {
    return (
        <div className="expenses">{children}</div>
    );
}

export default Expenses;