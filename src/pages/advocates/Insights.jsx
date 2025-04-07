import React from "react";

import Top from "../../components/advocates/insights/Top"
import Analytics from "../../components/advocates/insights/Analytics"

import InsightChart from "../../components/advocates/insights/components/InsightChart";

export default function Insights() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Top />
      <Analytics />
      <InsightChart/>
      {/* <Overview />
      <Revenue />
      <Payments /> */}
    </div>
  );
}
