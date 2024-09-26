import React from "react";

import "./ChartBar.css";

const ChartBar = (props) => {
  let percentage = "0%";
  console.log(props.value);

  if (props.value !== 0) {
   percentage = Math.round((props.value/props.maxValue) * 100) + "%";
  }
  // console.log(percentage);
  // console.log(props.value);
  return (
    <div className="chartbar_wrapper">
      <div className="chartbar__inner">
        <div className="chartbar" style={{height: percentage}}></div>
      </div>
      <p className="chart_label">{props.label}</p>
    </div>
  );
};

export default ChartBar;
