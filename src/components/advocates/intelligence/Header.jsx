import React, { useState, useEffect } from "react";
import { FaSyncAlt } from "react-icons/fa";


const Header = () => {
  const [loadedTime, setLoadedTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Format time as HH:MM:SS
    setLoadedTime(formattedTime);
  }, []); // Runs once when the component mounts

  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">AI Insights</h2>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Last Updated: {loadedTime}</span>

          <button
            onClick={generateInsights}
            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            <FaSyncAlt /> Generate
          </button>

          {/* <button className="border px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-1">
            <CiFilter size={16} /> Filter
          </button>
          <button className="border px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-1">
            <PiShareFatLight size={16} /> Share
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default Header;
