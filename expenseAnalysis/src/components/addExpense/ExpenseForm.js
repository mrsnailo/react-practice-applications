import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = (props) => {
  const [enteredTitle, setTitle] = useState("");
  const [enteredAmount, setAmount] = useState("");
  const [enteredDate, setDate] = useState("");
  const[validateText, setValidateText] = useState("")
  const titleInputHandler = (event) => {
    setTitle(event.target.value);
  };

  const amountInputHandler = (event) => {
    setAmount(event.target.value);
  };
  const dateInputHandler = (event) => {
    setDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!enteredTitle || !enteredAmount || !enteredDate) {
      setValidateText("Please enter correct values!");
    } else {
      const ExpenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate),
      };
      setTitle("");
      setAmount("");
      setDate("");
      console.log(ExpenseData);
      props.onSaveExpenseData(ExpenseData);
      props.closeForm(false);
    }
  };

  const getMaxDate = (iDate) => {
    let year = iDate.toLocaleString("en-US", { year: "numeric" });

    let month = iDate.toLocaleString("en-US", { month: "2-digit" });
    // console.log(month)
    const day = String(iDate.getDate()).padStart(2, "0");

    const format = year + "-" + month + "-" + day;

    return format;
  };
  const formCloseHandler = () => {
    props.closeForm(false);
  };

  // console.log(getMaxDate(new Date()));
  return (
    <form onSubmit={submitHandler}>
      <div className="form_controls">
        <div className="form_control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleInputHandler}
          />
        </div>
        <div className="form_control">
          <label>Enter amount</label>
          <input
            type="number"
            value={enteredAmount}
            min="0.01"
            step="0.01"
            onChange={amountInputHandler}
          />
        </div>
        <div className="form_control">
          <label>Pick a date</label>
          <input
            type="date"
            value={enteredDate}
            min="2017-01-01"
            max={getMaxDate(new Date())}
            onChange={dateInputHandler}
          />
        </div>
        <div className="form_action">
          <span className="validateText">{validateText}</span>
          <button onClick={formCloseHandler}>Cancel</button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
