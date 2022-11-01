import React, { useState } from 'react';
import './App.css';
import ExpenseItem, { ExpenseProps } from './components/Expense/ExpenseItem';
import Expenses from './components/Expense/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

function App() {
  const expenses: ExpenseProps[] = [
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
  ]

  const [filterDate, setFilterDate] = useState('')

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onNewExpense={e => expenses.push({ id: e.id!, amount: e.amount, date: new Date(e.date), title: e.title })} />
      <Expenses onFilterChange={(e)=> setFilterDate(e.target.value)}>
        {expenses.map(prop => (<ExpenseItem {...prop}></ExpenseItem>))}
      </Expenses>
    </div>
  );
}

export default App;
