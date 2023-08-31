import "./App.css";
import Expenses from "./components/ExpenseUI/Expenses";
import Card from "./components/FUI/card";
import React, { useState } from "react";
import AddExpense from "./components/addExpense/AddExpense";

const dumy_expenses = [
  {
    id: "i1",
    title: "কম্পিউটার",
    amount: "6545",
    date: new Date(2023, 1, 1),
  },
  {
    id: "i10",
    title: "rocket",
    amount: "5466",
    date: new Date(2023, 2, 12),
  },
  {
    id: "i107",
    title: "lune",
    amount: "4565",
    date: new Date(2023, 5, 12),
  },
  {
    id: "i9",
    title: "goat",
    amount: "3200",
    date: new Date(2022, 6, 12),
  },
  {
    id: "i2",
    title: "মুদি সামগ্রী ",
    amount: "4456",
    date: new Date(2021, 4, 14),
  },
  {
    id: "i3",
    title: "আইফোন ১৫ প্রো ম্যাক্স",
    amount: "5443",
    date: new Date(2022, 6, 12),
  },
  {
    id: "i4",
    title: "টিস্যু পেপার",
    amount: "56676",
    date: new Date(2020, 3, 25),
  },
  {
    id: "i11",
    title: "soap",
    amount: "5000",
    date: new Date(2018, 6, 28),
  },
  {
    id: "4544545",
    title: "Gun",
    amount: "3435",
    date: new Date(2019, 4, 24),
  },
];
const App = () => {
  const [expenses, setExpenses] = useState(dumy_expenses);
  const addExpenseHAndler = (expense) => {
    setExpenses((prevState) => {
      return [expense, ...prevState];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>React expense tracker application</h2>
      </header>
      <Card className="Application_body ExpenseForm_container">
        <AddExpense onAddExpense={addExpenseHAndler} />
      </Card>
      <Card className="Application_body Expense_container">
        <Expenses items={expenses} />
      </Card>
    </div>
  );
};

export default App;
