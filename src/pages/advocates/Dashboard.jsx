import React from "react";

// import Revenue from "../components/advocates/dashboard/Revenue";
// import Payments from "../components/advocates/dashboard/Payments";
import Overview from "../../components/brands/dashboard/Overview";
import Revenue from "../../components/brands/dashboard/Revenue";
import Payments from "../../components/brands/dashboard/Payments";



export default function Dashboard() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Overview />
      <Revenue />
      <Payments />
    </div>
  );
}
