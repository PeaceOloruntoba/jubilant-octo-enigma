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

const lineChartData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
  datasets: [
    {
      label: "Target",
      data: [20000, 17000, 22000, 25000, 27000, 30000, 36000],
      fill: true,
      borderColor: "#22c55e",
      backgroundColor: "rgba(34, 197, 94, 0.1)",
      tension: 0.4,
    },
    {
      label: "Subscribers",
      data: [34000, 24000, 18000, 19000, 21000, 25000, 31000],
      fill: false,
      borderColor: "#3b82f6",
      backgroundColor: "transparent",
      tension: 0.4,
      borderDash: [5, 5],
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

const doughnutData = {
  labels: ["Direct", "Social", "Email", "Others"],
  datasets: [
    {
      data: [300, 400, 200, 100],
      backgroundColor: ["#3b82f6", "#10b981", "#ef4444", "#f59e0b"],
      borderWidth: 0,
    },
  ],
};

const doughnutOptions = {
  cutout: "75%",
  plugins: {
    legend: { display: false },
  },
};

const revenueSparklineData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      data: [4000, 5200, 4800, 6000, 5800, 5400],
      borderColor: "#38bdf8", // lighter blue
      backgroundColor: (context) => {
        const ctx = context.chart.ctx;
        const gradient = ctx.createLinearGradient(0, 0, 0, 120);
        gradient.addColorStop(0, "rgba(56, 189, 248, 0.5)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        return gradient;
      },
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
      {/* === Campaign Overview Card === */}
      <div className="bg-white rounded-2xl shadow p-6 lg:col-span-2">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-lg font-semibold">Campaign Overview</h2>
          <select className="border rounded px-3 py-1 text-sm">
            <option>Sort By: Annually</option>
          </select>
        </div>

        {/* Top Stats */}
        <div className="grid grid-cols-3 text-center divide-x divide-gray-200 mb-4">
          <div className="px-2">
            <p className="text-xl font-semibold">
              602 <span className="text-green-600 text-sm font-medium">12% ↑</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Avg. Session</p>
          </div>
          <div className="px-2">
            <p className="text-xl font-semibold">
              915 <span className="text-green-600 text-sm font-medium">29.5 ↑</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Conversion Rate</p>
          </div>
          <div className="px-2">
            <p className="text-xl font-semibold">
              2m 25secs <span className="text-green-600 text-sm font-medium">12.8 ↑</span>
            </p>
            <p className="text-xs text-gray-500 mt-1">Avg. Session Duration</p>
          </div>
        </div>

        {/* Chart + Revenue Box */}
        <div className="flex flex-col lg:flex-row gap-6 items-start">
          <div className="flex-1 h-64">
            <Line data={lineChartData} options={lineChartOptions} />
          </div>

{/* === Total Revenue Box === */}
<div className="border border-gray-200 rounded-xl p-4 w-full lg:w-[250px]">
  <p className="text-sm text-gray-500">Total Revenue:</p>
  <p className="text-3xl font-bold text-gray-900 mt-1">$9,542.00</p>
  <p className="text-xs text-gray-500 mb-4">From Jan 20,2022 to July,2022</p>

 {/* Sparkline beside badge */}
<div className="flex items-center justify-between mb-4">
  <div className="w-[150px] h-[60px]">
    <Line data={revenueSparklineData} options={revenueSparklineOptions} />
  </div>

  <div className="ml-2 bg-red-600 text-white text-xs font-semibold px-2 py-[2px] rounded shadow flex items-center gap-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-3 w-3"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="3"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
    </svg>
    16.3%
  </div>
</div>

  {/* Net Profit & Revenue */}
  <div className="mt-4 flex justify-between text-sm font-medium">
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-green-500 rounded-full"></span>
      <div>
        <p className="text-gray-800">$5,271.34</p>
        <p className="text-xs text-gray-500">Net Profit</p>
      </div>
    </div>
    <div className="flex items-center gap-2">
      <span className="w-2 h-2 bg-red-500 rounded-full"></span>
      <div>
        <p className="text-gray-800">$5,271.34</p>
        <p className="text-xs text-gray-500">Net Revenue</p>
      </div>
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
              Performance<br />Progress
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
