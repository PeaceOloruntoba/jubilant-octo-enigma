import React, { useState, useEffect } from "react";
// import { Filter, Share2 } from "lucide-react";
import { CiFilter } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";

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
          <h2 className="text-xl font-semibold text-gray-800">
            !Ncademy
          </h2>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Last Updated: {loadedTime}</span>
          <button className="border px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-1">
            <CiFilter size={16} /> Filter
          </button>
          <button className="border px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-1">
            <PiShareFatLight size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
