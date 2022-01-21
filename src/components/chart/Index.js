import React from 'react';
import "./chart.css";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,

  Tooltip,

  ResponsiveContainer,
} from "recharts";


const Chart = () => {
  const data = [
    {
      name: "Mon",
      uv: 0,
      "ActiveUser": 300,
    },
    {
      name: "Tue",
      uv: 100,
      "ActiveUser": 200,
    },
    {
      name: "Wed",
      uv: 200,
      "ActiveUser": 100,
    },
    {
      name: "Thu",
      uv: 300,
      "ActiveUser": 250,
    },
    {
      name: "Fri",
      uv: 300,
      "ActiveUser": 150,
    },
    {
      name: "Sat",
      uv: 300,
      "ActiveUser": 20,
    },
    {
      name: "Sun",
      uv: 300,
      "ActiveUser": 300,
    },
  ];

  return (
    <div className="chart">
      <h3 className="chart-title">Total Distribution</h3>

      <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart data={data}>
          <XAxis dataKey="name"  />
          <YAxis dataKey="uv"  />
          <Line type="monotone" dataKey="ActiveUser" stroke="#5550bd" />
          <Tooltip />
          
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
