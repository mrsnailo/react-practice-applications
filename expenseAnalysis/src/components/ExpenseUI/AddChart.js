import React from "react";

import Chart from "../Chart/Chart";

const AddChart = (props) => {
  
  const chartDataPoints = [
    { label: 'Jan', value: 0 },
    { label: 'Feb', value: 0 },
    { label: 'Mar', value: 0 },
    { label: 'Apr', value: 0 },
    { label: 'May', value: 0 },
    { label: 'Jun', value: 0 },
    { label: 'Jul', value: 0 },
    { label: 'Aug', value: 0 },
    { label: 'Sep', value: 0 },
    { label: 'Oct', value: 0 },
    { label: 'Nov', value: 0 },
    { label: 'Dec', value: 0 },
  ]; 


  // console.log(chartDataPoints)  

  console.log("ran after new expense");
  for (const expense of props.datalist) {
  
    const expenseMonth = expense.date.getMonth();

    chartDataPoints[expenseMonth].value += Number(expense.amount);



  }

  console.log(chartDataPoints)

  return <Chart datapoints={chartDataPoints} />



}

export default AddChart;
