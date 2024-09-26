import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
const AddExpense = (props) => {
  const [isEditing, setEditing] = useState(false);

  const addExpenseHandler = (expense) => {
    const expenseList = {
      ...expense,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseList);
  };

  const startEditingHandler = () => {
    setEditing(true);
    // console.log("function executes");
  };

  const closeEditing = (bool) => {
    setEditing(bool);
  };
  return (
    <div className="newExpenseWrapper">
      {!isEditing && (
        <button
          className="addButton"
          onClick={startEditingHandler}
          type="button"
        >
          Add New Entry
        </button>
      )}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={addExpenseHandler}
          closeForm={closeEditing}
        />
      )}
    </div>
  );
};

export default AddExpense;
