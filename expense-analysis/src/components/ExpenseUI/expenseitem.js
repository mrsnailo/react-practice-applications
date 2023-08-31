import React from "react";
import "./expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../FUI/card";

function ExpenseItem(props) {
  return (
    <Card className="col-12 col-sm-6 col-md-4 col-lg-2 expense_wrapper">
      <ExpenseDate date={props.date} />
      <div>
        <h5 className="exp_title">{props.title}</h5>
        <div className="exp_amount">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
