import React, { useState } from "react";
import { FaArrowUp, FaArrowDown, FaSyncAlt } from "react-icons/fa";
import Header from "./Header";

const Intelligence = () => {
  const [revenue, setRevenue] = useState(51000);
  const [clicks] = useState(30000);
  const [subscribers] = useState(18456);
  const [products] = useState(7860);
  const [target] = useState(59000);
  const [inProgress, setInProgress] = useState(33276);

  const generateInsights = () => {
    // Simulate generating insights - update revenue for demo
    setRevenue((prev) => prev + 1000);
    setInProgress((prev) => prev + 1000);
  };

  const progressPercent = ((inProgress / target) * 100).toFixed(1);

  return (
    <div className="min-h-screen bg-black text-white p-6 space-y-6">
      {/* <div className="text-2xl font-semibold">AI Insights</div> */}
      <Header generateInsights={generateInsights}/>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-red-600 text-white rounded-xl p-4 shadow-md">
          <div className="text-sm">Product Revenue</div>
          <div className="text-2xl font-bold">${revenue.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-green-300">
            <FaArrowUp /> 15.9% <span className="ml-1">After a week</span>
          </div>
        </div>

        <div className="bg-gray-100 text-black rounded-xl p-4 shadow-md">
          <div className="text-sm">Total Clicks</div>
          <div className="text-2xl font-bold">{clicks.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <FaArrowUp /> 8.5% <span className="ml-1">After a week</span>
          </div>
        </div>

        <div className="bg-gray-100 text-black rounded-xl p-4 shadow-md">
          <div className="text-sm">Total Subscribers</div>
          <div className="text-2xl font-bold">
            {subscribers.toLocaleString()}
          </div>
          <div className="flex items-center gap-1 text-sm text-green-600">
            <FaArrowUp /> 2.9% <span className="ml-1">After a week</span>
          </div>
        </div>

        <div className="bg-gray-100 text-black rounded-xl p-4 shadow-md">
          <div className="text-sm">Total Products</div>
          <div className="text-2xl font-bold">{products.toLocaleString()}</div>
          <div className="flex items-center gap-1 text-sm text-red-600">
            <FaArrowDown /> 6.17% <span className="ml-1">After a week</span>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 rounded-xl p-6 text-black">
        <div className="text-md font-medium mb-2">Monthly Target</div>
        <div className="text-sm text-gray-700">In Progress</div>
        <div className="text-lg font-semibold mb-2">
          ${inProgress.toLocaleString()}
        </div>
        <div className="relative h-4 bg-gray-300 rounded-full overflow-hidden">
          <div
            className="h-full bg-blue-400 text-xs text-white text-center"
            style={{ width: `${progressPercent}%` }}
          >
            {progressPercent}%
          </div>
        </div>
        <div className="text-right text-sm mt-1">
          Target: ${target.toLocaleString()}
        </div>
      </div>

      <div className="text-right">
        <button
          onClick={generateInsights}
          className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
        >
          <FaSyncAlt /> Generate
        </button>
        <div className="text-xs text-gray-400 mt-1">Last Updated: 14:23</div>
      </div>
    </div>
  );
};

export default Intelligence;
