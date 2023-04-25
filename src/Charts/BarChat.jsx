import React, { PureComponent } from "react";
import ReactEcharts from "echarts-for-react";

function BarChat() {
  const options = {
    xAxis: {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        data: [
          120,
          {
            value: 200,
            itemStyle: {
              color: "#a90000",
            },
          },
          150,
          80,
          70,
          110,
          130,
        ],
        type: "bar",
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

export default BarChat;
