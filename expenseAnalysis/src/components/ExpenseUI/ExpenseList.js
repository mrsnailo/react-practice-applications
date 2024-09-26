import React from "react";
import ExpenseItem from "./expenseitem";
import "./ExpenseList.css";

const ExpenseList = (props) => {
  const rlist = props.list;

  if (props.list.length === 0) {
    return <h2>No expense occured</h2>;
  }

  // console.log(props.list);
  return rlist.map((item) => {
    return(

    
    <ExpenseItem
      key={item.id}
      title={item.title}
      amount={item.amount}
      date={item.date}
    />

    )
  });
};

export default ExpenseList;
