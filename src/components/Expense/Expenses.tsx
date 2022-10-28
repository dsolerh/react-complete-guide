import Card from '../Card/Card';
import './Expenses.css'

function Expenses({ children }: { children: JSX.Element[] }): JSX.Element {
    return (
        <Card id='expenses' className="expenses">{children}</Card>
    );
}

export default Expenses;