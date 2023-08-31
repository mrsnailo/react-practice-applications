import ChartBar from "./ChartBar";
import "./Chart.css";
const Chart = (props) => {
  const dataPointValues = props.datapoints.map((dataPoint) => dataPoint.value);

  let maxValue = 0;
  for (let i = 0; i < dataPointValues.length; i++) {
       maxValue += dataPointValues[i];
    
  }
  
  // console.log(props.percentage);
  return (
    <div className="chart">
      {props.datapoints.map((dataPoints) => (
        <ChartBar
          key={dataPoints.label}
          value={dataPoints.value}
          maxValue={maxValue}
          label={dataPoints.label}
        />
      ))}
    </div>
  );
};

export default Chart;
