import React, { useState } from "react";
import { PieChart, Pie, ResponsiveContainer } from "recharts";
import styles from "../styles/Target.module.scss";
const Target = () => {
  const dailyData = [
    { name: "Completed", value: 80 },
    { name: "Pending", value: 20 },
  ];
  const weeklyData = [
    { name: "Completed", value: 65 },
    { name: "Pending", value: 35 },
  ];
  const monthlyData = [
    { name: "Completed", value: 85 },
    { name: "Pending", value: 15 },
  ];
  const YearlyData = [
    { name: "Completed", value: 70 },
    { name: "Pending", value: 30 },
  ];
  const [range, setRange] = useState("daily");

  return (
    <div className={styles.target}>
      <div className={styles.header}>
        <p className={styles.head}>
          Target Completion <span style={{ color: "tomato" }}>({range})</span>{" "}
        </p>
        <select name="" id="" onChange={(e) => setRange(e.target.value)}>
          <option value="daily" selected>
            Daily
          </option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>

      <div className={styles.targetBlocks}>
        <div className={styles.block}>
          <div>
            <ResponsiveContainer width="95%" height={400}>
              <PieChart width={400} height={400}>
                <Pie
                  dataKey="value"
                  startAngle={360}
                  endAngle={0}
                  data={
                    range === "weekly"
                      ? weeklyData
                      : range === "monthly"
                      ? monthlyData
                      : range === "yearly"
                      ? YearlyData
                      : dailyData
                  }
                  margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
                  cx={200}
                  cy={200}
                  outerRadius={80}
                  fill="#8884d8"
                  label
                ></Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Target;
