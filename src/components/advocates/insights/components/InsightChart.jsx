import React from "react";
import { Line, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Filler,
  Tooltip,
  Legend,
  ArcElement
);

// === LINE CHART DATA ===
const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Target",
      data: [20000, 17000, 22000, 25000, 27000, 30000, 36000],
      fill: true,
      borderColor: "#00C49F",
      backgroundColor: "rgba(0, 196, 159, 0.2)",
      tension: 0.4,
    },
    {
      label: "Subscribers",
      data: [34000, 24000, 18000, 19000, 21000, 25000, 31000],
      fill: true,
      borderColor: "#FFBB28",
      backgroundColor: "rgba(255, 187, 40, 0.2)",
      tension: 0.4,
    },
    {
      label: "Clicks",
      data: [27000, 30000, 32000, 24000, 18000, 20000, 23000],
      fill: true,
      borderColor: "#00BFFF",
      backgroundColor: "rgba(0, 191, 255, 0.2)",
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,

  plugins: {
    legend: {
      position: "top",
    },
  },
};

// === DOUGHNUT CHART DATA ===
const doughnutData = {
  labels: ["Direct", "Social", "Email", "Others"],
  datasets: [
    {
      label: "Subscribers",
      data: [400, 500, 300, 564],
      backgroundColor: ["#00BFFF", "#00C49F", "#FFBB28", "#FF444A"],
      borderWidth: 1,
    },
  ],
};

const doughnutOptions = {
  responsive: true,
  cutout: "70%",
  plugins: {
    legend: {
      position: "bottom",
    },
  },
};

const InsightChart = () => {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-5 gap-6">
      {/* Analytical Overview */}
      <div className="bg-white rounded-2xl shadow p-4 md:col-span-3 h-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Analytical Overview</h2>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Sort By: Annually</option>
          </select>
        </div>
        <Line data={lineChartData} options={lineChartOptions}/>
      </div>

      {/* Subscribers by Source */}
      <div className="bg-white rounded-2xl shadow p-4 relative md:col-span-2 h-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Subscribers by Source</h2>
          <select className="border rounded px-2 py-1 text-sm">
            <option>Sort By: Annually</option>
          </select>
        </div>
        <div className="flex justify-center items-center relative h-[250px]">
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="absolute text-center">
            <div className="text-sm text-gray-500">Subscribers</div>
            <div className="text-2xl font-bold">1,764</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightChart;
