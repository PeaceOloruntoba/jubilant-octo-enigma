import React from 'react'
import Analytics from '../components/brands/insights/Analytics';
import InsightChart from '../components/brands/insights/components/InsightChart';
import Top from '../components/brands/insights/Top';

export default function Insights() {
  return <div className="flex flex-col gap-8 p-8">
    <Analytics />
    <InsightChart />
    <Top />
    {/* <Overview />
      <Revenue />
      <Payments /> */}
  </div>;
}
