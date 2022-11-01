import { useState } from 'react';
import './App.css';
import Expenses from './components/Expense/Expenses';
import { Expense } from './components/NewExpense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const EXPENSES: Expense[] = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12)
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(EXPENSES)
  const [date, setFilterDate] = useState('2020')

  function addExpense(e: Expense) {
    const exp = { id: e.id!, amount: e.amount, date: new Date(e.date), title: e.title }
    setExpenses(prev => [exp, ...prev])
  }

  function filterDate(val: string) {
    setFilterDate(val)
  }

  const filteredData = expenses.filter(v => (v.date as Date).getFullYear() === +date)

  return (
    <div>
      <NewExpense onNewExpense={addExpense} />
      <Expenses onFilterChange={filterDate} filterValue={date} expences={filteredData}/>
    </div>
  );
}

export default App;
