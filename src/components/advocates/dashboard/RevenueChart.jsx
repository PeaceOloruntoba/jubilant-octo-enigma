import React, { useState, useEffect } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { faker } from "@faker-js/faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const FILTER_OPTIONS = [
  { label: "Last 7 Days", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
  { label: "Last 3 Months", value: "3m" },
  { label: "Last 6 Months", value: "6m" },
  { label: "Last 1 Year", value: "1y" },
  { label: "All Time", value: "all" },
];

const generateLabels = (filter) => {
  const now = new Date();
  let labels = [];

  switch (filter) {
    case "7d":
      for (let i = 6; i >= 0; i--)
        labels.push(new Date(now - i * 86400000).toLocaleDateString());
      break;
    case "30d":
      for (let i = 29; i >= 0; i--)
        labels.push(new Date(now - i * 86400000).toLocaleDateString());
      break;
    case "3m":
      labels = ["Jan", "Feb", "Mar"];
      break;
    case "6m":
      labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
      break;
    case "1y":
      labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      break;
    case "all":
    default:
      labels = ["2020", "2021", "2022", "2023", "2024"];
      break;
  }
  return labels;
};

const generateData = (labels) => {
  return labels.map(() => faker.number.int({ min: 10000, max: 25000 }));
};

export default function RevenueChart() {
  const [selectedFilter, setSelectedFilter] = useState("30d");
  const [chartData, setChartData] = useState({ labels: [], datasets: [] });

  useEffect(() => {
    const labels = generateLabels(selectedFilter);
    const dataset1 = generateData(labels);
    const dataset2 = generateData(labels);

    setChartData({
      labels,
      datasets: [
        {
          label: "This Period",
          data: dataset1,
          borderColor: "rgb(255, 99, 132)",
          backgroundColor: "rgba(255, 99, 132, 0.5)",
          tension: 0.3,
        },
        {
          label: "Last Period",
          data: dataset2,
          borderColor: "rgb(255, 206, 86)",
          backgroundColor: "rgba(255, 206, 86, 0.5)",
          tension: 0.3,
        },
      ],
    });
  }, [selectedFilter]);

  const totalRevenue =
    chartData.datasets[0]?.data?.reduce((acc, val) => acc + val, 0) || 0;
  const lastPeriodRevenue =
    chartData.datasets[1]?.data?.reduce((acc, val) => acc + val, 0) || 0;
  const revenueGrowth = lastPeriodRevenue
    ? (((totalRevenue - lastPeriodRevenue) / lastPeriodRevenue) * 100).toFixed(
        1
      )
    : 0;

  return (
    <div className="w-full h-fit border border-gray-200 rounded-lg shadow-md  ">
      <div className="flex justify-between items-center p-6 ">
        <div>
          <h2 className="text-[16px] font-medium">Revenue Over Time</h2>
        </div>
        <select
          value={selectedFilter}
          onChange={(e) => setSelectedFilter(e.target.value)}
          className="border border-gray-300 rounded-lg px-2 py-1 outline-none text-lg shadow"
        >
          {FILTER_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <hr className="" />
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-row items-center gap-4">
          <span className="text-2xl font-bold flex items-center gap-2">
            ${totalRevenue.toLocaleString()}{" "}
            <span
              className={`${
                revenueGrowth >= 0 ? "text-green-500" : "text-red-500"
              } flex items-center`}
            >
              {revenueGrowth >= 0 ? "↑" : "↓"}
              {Math.abs(revenueGrowth)}%
            </span>
          </span>
          <p className="text-sm text-gray-500">from last period</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">
            <div className="p-2 bg-[#CC5955] rounded"></div>
            This Period
          </span>
          <span className="flex items-center gap-2">
            <div className="p-2 bg-[#F8C537] rounded"></div>
            Last Period
          </span>
        </div>
      </div>
      <div className="p-4">
        <Line
          data={chartData}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false, position: "top" },
              tooltip: { mode: "index", intersect: false },
            },
            scales: {
              y: {
                beginAtZero: false,
                ticks: { callback: (value) => `$${value.toFixed(1)}K` },
              },
            },
          }}
        />
      </div>
    </div>
  );
}
