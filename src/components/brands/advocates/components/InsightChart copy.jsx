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
      backgroundColor: "rgba(0, 196, 159, 0.1)",
      tension: 0.4,
    },
    {
      label: "Subscribers",
      data: [34000, 24000, 18000, 19000, 21000, 25000, 31000],
      fill: true,
      borderColor: "#FFBB28",
      backgroundColor: "rgba(255, 187, 40, 0.1)",
      tension: 0.4,
    },
  ],
};

const lineChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: { grid: { display: false } },
    y: { grid: { borderDash: [3] } },
  },
};

// === DOUGHNUT CHART DATA ===
const doughnutData = {
  labels: ["Direct", "Social", "Email", "Others"],
  datasets: [
    {
      label: "Sources",
      data: [300, 400, 200, 100],
      backgroundColor: ["#3b82f6", "#10b981", "#ef4444", "#f59e0b"],
      borderWidth: 0,
    },
  ],
};

const doughnutOptions = {
  cutout: "75%",
  plugins: {
    legend: {
      display: false,
    },
  },
};

// === Sparkline Data (for Total Revenue box) ===
const revenueSparklineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [4000, 5200, 4800, 6000, 5800, 5400],
      borderColor: "#f87171",
      backgroundColor: "rgba(248, 113, 113, 0.2)",
      fill: true,
      tension: 0.4,
    },
  ],
};

const revenueSparklineOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: { enabled: false },
  },
  scales: {
    x: { display: false },
    y: { display: false },
  },
};

const InsightChart = () => {
  return (
    <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* === Campaign Overview === */}
      <div className="bg-white rounded-2xl shadow p-6 lg:col-span-2">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Campaign Overview</h2>
          <select className="border rounded px-3 py-1 text-sm">
            <option>Sort By: Annually</option>
          </select>
        </div>

        {/* Top Metrics */}
        <div className="grid grid-cols-3 text-center mb-6">
          <div>
            <p className="text-xl font-semibold">
              602{" "}
              <span className="text-green-600 text-sm font-normal">12%</span>
            </p>
            <p className="text-xs text-gray-500">Avg. Session</p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              915{" "}
              <span className="text-green-600 text-sm font-normal">29.5</span>
            </p>
            <p className="text-xs text-gray-500">Conversion Rate</p>
          </div>
          <div>
            <p className="text-xl font-semibold">
              2m 25secs{" "}
              <span className="text-green-600 text-sm font-normal">12.8</span>
            </p>
            <p className="text-xs text-gray-500">Avg. Session Duration</p>
          </div>
        </div>

        {/* Chart + Revenue Side by Side */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          {/* Line Chart */}
          <div className="flex-1 h-64">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>

          {/* Revenue Box */}
          <div className="border rounded-xl p-4 w-full lg:w-[250px] shadow-sm">
  <p className="text-sm text-gray-500">Total Revenue:</p>
  <p className="text-2xl font-bold mb-1">$9,542.00</p>
  <p className="text-xs text-gray-500 mb-4">
    From Jan 20, 2022 to July, 2022
  </p>

  {/* Mini Chart */}
  <div className="h-20 -mt-2 mb-2">
    <Line data={revenueSparklineData} options={revenueSparklineOptions} />
  </div>

  <div className="flex flex-col gap-2 text-sm">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      Net Profit: $5,271.34
    </div>
    <div className="flex items-center gap-2 text-red-500">
      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      Net Revenue: $5,271.34
      <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-0.5 rounded-full">
        ▼ 16.3%
      </span>
    </div>
            </div>
          </div>
        </div>
      </div>

      {/* === Visits by Source === */}
      <div className="bg-white rounded-2xl shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Visits by Source</h2>
          <select className="border rounded px-3 py-1 text-sm">
            <option>Sort By: Annually</option>
          </select>
        </div>

        <div className="relative flex justify-center items-center h-60">
          <Doughnut data={doughnutData} options={doughnutOptions} />
          <div className="absolute text-center">
            <p className="text-2xl font-bold">73%</p>
            <p className="text-sm text-gray-600 leading-tight">
              Performance<br />
              Progress
            </p>
          </div>
        </div>

        <div className="flex justify-around text-sm mt-6">
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full"></span> Direct
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-green-500 rounded-full"></span> Social
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-red-500 rounded-full"></span> Email
          </div>
          <div className="flex items-center gap-1">
            <span className="w-2 h-2 bg-yellow-400 rounded-full"></span> Others
          </div>
        </div>
      </div>
    </div>
  );
};

export default InsightChart;
