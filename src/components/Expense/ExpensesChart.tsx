import Chart from "../Chart/Chart";
import { Expense } from "../NewExpense/Expense";

interface ExpencesChartProps {
    expenses: Expense[]
}

function ExpensesChart({expenses}: ExpencesChartProps) {
    const chartDP = [
        {label: 'Jan', value: 0},
        {label: 'Feb', value: 0},
        {label: 'Mar', value: 0},
        {label: 'Apr', value: 0},
        {label: 'May', value: 0},
        {label: 'Jun', value: 0},
        {label: 'Jul', value: 0},
        {label: 'Aug', value: 0},
        {label: 'Sep', value: 0},
        {label: 'Oct', value: 0},
        {label: 'Nov', value: 0},
        {label: 'Dec', value: 0},
    ]

    for (const expense of expenses) {
        const month = new Date(expense.date).getMonth()
        chartDP[month].value += expense.amount
    }

    console.log(chartDP);
    

    return ( 
        <Chart dataPoints={chartDP}/>
     );
}

export default ExpensesChart;