import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PieChart from "../Charts/PieChart";
import BarChat from "../Charts/BarChat";
import RadarChart from "../Charts/RadarChart";
import CustomPiechart from "../Charts/CustomPiechart";
import "../Styles/Analytics.css";

function Analytics() {
  const [show, SetShow] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const ROLE = localStorage.getItem("role");
    if (ROLE == "user" || ROLE == "manager") {
      navigate("/404");
    }
  }, []);

  return (
    <div>
      <div className="headTwoChart">
        <div className="chartHead">
          <PieChart />
        </div>
        <div className="chartHead">
          <BarChat />
        </div>
      </div>
      <div className="headTwoChart">
        <div className="chartHead">
          {" "}
          <RadarChart />
        </div>
        <div className="chartHead">
          <CustomPiechart />
        </div>
      </div>
    </div>
  );
}

export default Analytics;
