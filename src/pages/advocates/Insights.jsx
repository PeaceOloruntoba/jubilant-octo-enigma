import React from "react";

import Top from "../../components/advocates/insights/Top"
import Analytics from "../../components/advocates/insights/Analytics"

export default function Insights() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <Top />
      <Analytics />
      {/* <Overview />
      <Revenue />
      <Payments /> */}
    </div>
  );
}
