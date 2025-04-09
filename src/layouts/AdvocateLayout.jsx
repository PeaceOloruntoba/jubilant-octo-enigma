import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/advocates/Sidebar"
import Header from "../components/advocates/Header"
export default function AdvocateLayout() {
  const [expanded, setExpanded] = useState(true);
  return (
    <div className="w-screen h-screen flex bg-white dark:bg-black text-black dark:text-white transition-color duration-500">
      <Sidebar expanded={expanded} setExpanded={setExpanded} />
      <div
        className={`"flex flex-col w-full transition-all duration-500 p-4" ${
          expanded ? "pl-72" : "pl-20"
        }`}
      >
        <Header />
        <Outlet />
      </div>
    </div>
  );
}
