import React, { useState, useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { PiCursorClick, PiShareFatLight } from "react-icons/pi";
import { LuSquareArrowOutUpRight, LuUsers, LuDollarSign } from "react-icons/lu";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";
import Button from "../../shared/Button";
import { incomeIcon } from "../../../assets";

export default function Overview() {
  const [loadedTime, setLoadedTime] = useState("");
  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Format time as HH:MM:SS
    setLoadedTime(formattedTime);
  }, []); // Runs once when the component mounts

  const dummyData = [
    {
      id: 1,
      icon: <LuUsers />,
      name: "Advocates",
      value: 76,
      percentage: 24.5,
      upT: true,
    },
    {
      id: 2,
      icon: <PiCursorClick />,
      name: "Clicks",
      value: 20.845,
      percentage: 8.3,
      upT: false,
    },
    {
      id: 3,
      icon: <LuDollarSign />,
      name: "Payments",
      value: "$48,000.00",
      percentage: 10.5,
      upT: true,
    },
    {
      id: 4,
      icon: <img src={incomeIcon} className="w-6" />,
      name: "Total Income",
      value: "$153,000.00",
      percentage: 8.6,
      upT: false,
    },
  ];

  return (
    <div className="flex flex-col w-full gap-8 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex items-center justify-between text-[#757474] text-lg ">
        <span className="text-sectext text-[22px] font-[500]">Overview</span>
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
      <div className="flex gap-8 items-center justify-center w-full">
        {dummyData?.map((dummy) => (
          <Card
            key={dummy?.id}
            icon={dummy?.icon}
            name={dummy?.name}
            value={dummy?.value}
            percentage={dummy?.percentage}
            upT={dummy?.upT}
          />
        ))}
      </div>
    </div>
  );
}

function Card({ icon, name, value, percentage, upT }) {
  return (
    <div className="border rounded-xl shadow flex flex-col w-full bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-col p-4 gap-2">
        <span className="border rounded-lg p-2 w-fit text-2xl">{icon}</span>
        <div className="flex items-end justify-between">
          <div className="flex flex-col">
            <span className="text-xl">{name}</span>
            <span className="text-2xl">{value}</span>
          </div>
          <span>
            <LuSquareArrowOutUpRight />
          </span>
        </div>
      </div>
      <div className="bg-[#EBE8E8] p-4 flex items-center justify-between text">
        <span
          className={`flex items-center ${
            upT ? "text-green-500" : "text-red-500"
          }`}
        >
          <span className="">
            {upT ? (
              <IoIosArrowRoundUp size={12} />
            ) : (
              <IoIosArrowRoundDown size={12} />
            )}
          </span>
          {percentage}%
        </span>
        <span className="">from last period</span>
      </div>
    </div>
  );
}
