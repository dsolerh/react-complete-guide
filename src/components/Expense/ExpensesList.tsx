import { ContainerComponent } from "../../types/Components";
import './ExpensesList.css'

function ExpensesList({ children }: ContainerComponent) {
    if ((Array.isArray(children) && children.length > 0) || (!Array.isArray(children) && children !== null)) {
        return (
            <ul className="expenses-list">
                {children}
            </ul>
        );
    } else {
        return (<p className="expenses-list__fallback">No expenses found</p>)
    }
}

export default ExpensesList;