import React from "react";

// import Top from "../../components/advocates/insights/Top"
import Analytics from "../../components/advocates/insights/Analytics"

import InsightChart from "../../components/advocates/insights/components/InsightChart";

import Top from "../../components/advocates/insights/components/Top";

export default function Insights() {
  return (
    <div className="flex flex-col gap-8 p-8">
  
      <Analytics />
      <InsightChart/>
      <Top />
      {/* <Overview />
      <Revenue />
      <Payments /> */}
    </div>
  );
}
