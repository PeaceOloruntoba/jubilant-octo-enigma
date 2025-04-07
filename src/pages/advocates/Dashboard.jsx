import React from "react";
import Overview from "../components/advocates/dashboard/Overview";
import Revenue from "../components/advocates/dashboard/Revenue";
import Payments from "../components/advocates/dashboard/Payments";

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Overview />
      <Revenue />
      <Payments />
    </div>
  );
}
