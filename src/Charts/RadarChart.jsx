import React from "react";
import ReactEcharts from "echarts-for-react";

function RadarChart() {
  const options = {
    title: {
      //   text: "Basic Radar Chart",
    },
    // legend: {
    //   data: ["Allocated Budget", "Actual Spending"],
    // },
    radar: {
      // shape: 'circle',
      indicator: [
        { name: "Sandalwood", max: 6500 },
        { name: "Malluwood", max: 16000 },
        { name: "Tollywood ", max: 30000 },
        { name: "Bollywood ", max: 38000 },
        { name: "Kollywood", max: 52000 },
        { name: "Hollywood", max: 25000 },
      ],
    },
    series: [
      {
        name: "Budget vs spending",
        type: "radar",
        data: [
          {
            value: [4200, 3000, 20000, 35000, 50000, 18000],
            name: "Allocated Budget",
          },
          {
            value: [5000, 14000, 28000, 26000, 42000, 21000],
            name: "Actual Spending",
          },
        ],
      },
    ],
  };
  return (
    <ReactEcharts
      option={options}
      style={{ height: "300px", width: "300px" }}
    />
  );
}

export default RadarChart;
