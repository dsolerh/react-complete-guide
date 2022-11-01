import React, { useState } from 'react';
import './App.css';
import ExpenseItem from './components/Expense/ExpenseItem';
import Expenses from './components/Expense/Expenses';
import { Expense } from './components/NewExpense/Expense';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
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
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES)
  const [filterDate, setFilterDate] = useState('2020')

  function addExpense(e: Expense) {
    setExpenses((prev)=> [{ id: e.id!, amount: e.amount, date: new Date(e.date), title: e.title }, ...prev])
  }

  return (
    <div>
      <h2>Let's get started</h2>
      <NewExpense onNewExpense={addExpense} />
      <Expenses onFilterChange={val => setFilterDate(val)} filterValue={filterDate}>
        {expenses.map(prop => (<ExpenseItem {...prop}></ExpenseItem>))}
      </Expenses>
    </div>
  );
}

export default App;
