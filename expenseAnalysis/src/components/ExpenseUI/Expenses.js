import React, { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./ExpenseList";
import AddChart from "./AddChart";
function Expenses(props) {
  const [currentYear, setFilteredYear] = useState(2023);
  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredExpense = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === currentYear.toString();
  });

  console.log(filteredExpense);

  return (
    <div>
      <ExpenseFilter
        onChangeFilter={filterChangeHandler}
        selected={currentYear}
      />
      <AddChart datalist={filteredExpense} />
      <div className="row justify-content-around">
        <ExpenseList list={filteredExpense} />
      </div>
    </div>
  );
}

export default Expenses;
