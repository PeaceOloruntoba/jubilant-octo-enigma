import React, { useEffect, useState } from "react";
import Button from "../../shared/Button";
import { CiFilter } from "react-icons/ci";
import { PiShareFatLight } from "react-icons/pi";

export default function Analytics() {
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
    <div>
      <div className="flex items-center justify-between text-[#757474] text-lg">
        <span className="text-sectext text-[22px] font-[500]">
          !NSights (Analytics)
        </span>
        <div className="flex items-center gap-4">
          <span>Last updated {loadedTime}</span>
          <Button
            className={
              "bg-[#FBFAFA] border cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-lg"
            }
            value={
              <span className="flex items-center gap-1">
                <CiFilter size={12} /> Filter
              </span>
            }
          />
          <Button
            className={
              "bg-[#F2F0F0] border cursor-pointer hover:bg-gray-100 py-1 px-2 rounded-lg"
            }
            value={
              <span className="flex items-center gap-1">
                <PiShareFatLight size={12} /> Share
              </span>
            }
          />
        </div>
      </div>
    </div>
  );
}
