import React from "react";
import { stats } from "@/data/dummy-backend-data";
import Card from "../shared/Card";
const Dashboard = () => {
  return (
    <div style={{ color: "#fff" }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {stats.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
