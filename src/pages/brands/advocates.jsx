import React from 'react'
import Analytics from '../../components/brands/insights/Analytics';
// import InsightChart from '../../components/brands/insights/components/InsightChart';
import AdvocatesList from '../../components/brands/advocates/AdvocatesList';


export default function Insights() {
  return <div className="flex flex-col gap-8 p-8">
    <Analytics />
    {/* <InsightChart /> */}
    <AdvocatesList />
  </div>;
}

