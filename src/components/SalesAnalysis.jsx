import React, { useState } from "react";
import styles from "../styles/SalesAnalysis.module.scss";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Label,
  ResponsiveContainer,
} from "recharts";

const SalesAnalysis = () => {
  const [range, setRange] = useState("daily");
  const dailyData = [
    {
      name: "monday",
      uv: 4000,
    },
    {
      name: "tuesday",
      uv: 3000,
    },
    {
      name: "wednesday",
      uv: 2000,
    },
    {
      name: "thursday",
      uv: 2780,
    },
    {
      name: "friday",
      uv: 1890,
    },
    {
      name: "saturday",
      uv: 2390,
    },
    {
      name: "sunday",
      uv: 3490,
    },
  ];
  const weeklyData = [
    {
      name: "1",
      uv: 4000,
    },
    {
      name: "2",
      uv: 3000,
    },
    {
      name: "3",
      uv: 2000,
    },
    {
      name: "4",
      uv: 2780,
    },
    {
      name: "5",
      uv: 1890,
    },
    {
      name: "6",
      uv: 2390,
    },
    {
      name: "7",
      uv: 3490,
    },
    {
      name: "8",
      uv: 3490,
    },
    {
      name: "9",
      uv: 3490,
    },
    {
      name: "10",
      uv: 3490,
    },
    {
      name: "11",
      uv: 3590,
    },
    {
      name: "12",
      uv: 3690,
    },
    {
      name: "13",
      uv: 3790,
    },
    {
      name: "14",
      uv: 3890,
    },
    {
      name: "15",
      uv: 3990,
    },
    {
      name: "16",
      uv: 4090,
    },
    {
      name: "17",
      uv: 4190,
    },
    {
      name: "18",
      uv: 4290,
    },
    {
      name: "19",
      uv: 4390,
    },
    {
      name: "20",
      uv: 4490,
    },
    {
      name: "21",
      uv: 4590,
    },
    {
      name: "22",
      uv: 4690,
    },
    {
      name: "23",
      uv: 4790,
    },
    {
      name: "24",
      uv: 4890,
    },
    {
      name: "25",
      uv: 4990,
    },
    {
      name: "26",
      uv: 5090,
    },
    {
      name: "27",
      uv: 5190,
    },
    {
      name: "28",
      uv: 5290,
    },
    {
      name: "29",
      uv: 5390,
    },
    {
      name: "30",
      uv: 5490,
    },
    {
      name: "31",
      uv: 5590,
    },
  ];
  const monthlyData = [
    {
      name: "January",
      uv: 4000,
    },
    {
      name: "February",
      uv: 3000,
    },
    {
      name: "March",
      uv: 2000,
    },
    {
      name: "April",
      uv: 2780,
    },
    {
      name: "May",
      uv: 1890,
    },
    {
      name: "June",
      uv: 2390,
    },
    {
      name: "July",
      uv: 3490,
    },
    {
      name: "August",
      uv: 4090,
    },
    {
      name: "September",
      uv: 4190,
    },
    {
      name: "October",
      uv: 4290,
    },
    {
      name: "November",
      uv: 4390,
    },
    {
      name: "December",
      uv: 4490,
    },
  ];
  const yearlyData = [
    {
      name: "2015",
      uv: 3050,
    },
    {
      name: "2016",
      uv: 3150,
    },
    {
      name: "2017",
      uv: 3250,
    },
    {
      name: "2018",
      uv: 3350,
    },
    {
      name: "2019",
      uv: 3550,
    },
    {
      name: "2020",
      uv: 3650,
    },
    {
      name: "2021",
      uv: 3950,
    },
    {
      name: "2022",
      uv: 4050,
    },
  ];
  return (
    <div className={styles.salesAnalysis}>
      <div className={styles.header}>
        <p className={styles.head}>
          Sales Analysis <span style={{ color: "tomato" }}>({range})</span>
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
      <div className={styles.chart}>
        <ResponsiveContainer width="95%" height={400}>
          <BarChart
            width={800}
            height={350}
            data={
              range === "weekly"
                ? weeklyData
                : range === "monthly"
                ? monthlyData
                : range === "yearly"
                ? yearlyData
                : dailyData
            }
            margin={{ top: 15, right: 30, left: 20, bottom: 15 }}
          >
            <XAxis dataKey="name">
              <Label
                value={
                  range === "weekly"
                    ? "date"
                    : range === "monthly"
                    ? "month"
                    : range === "yearly"
                    ? "year"
                    : "day"
                }
                offset={-5}
                position="insideBottom"
              />
            </XAxis>
            <YAxis
              label={{
                value: "Sales value in rupees",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Bar dataKey="uv" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default SalesAnalysis;
