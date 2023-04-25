import React, { PureComponent } from "react";
import ReactEcharts from "echarts-for-react";

function PieChart() {
  const options = {
    tooltip: {
      trigger: "item",
    },
    // legend: {
    //   top: "5%",
    //   left: "center",
    // },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "Action" },
          { value: 735, name: "Fantasy" },
          { value: 580, name: "Family" },
          { value: 484, name: "Thriller" },
          { value: 300, name: "Romantic" },
          { value: 200, name: "Western" },
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

export default PieChart;
