import React from "react";

import ChartBar from "./ChartBar";
import '../../styles/Chart.css';

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
  const overallMax = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          value={dataPoint.value}
          maxValue={overallMax}
          label={dataPoint.label}
          key={dataPoint.label}
        />
      ))}
      ;
    </div>
  );
};

export default Chart;
