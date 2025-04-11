import React from 'react'
import Analytics from '../../components/brands/insights/Analytics';
// import InsightChart from '../../components/brands/insights/components/InsightChart';
import CampaignsList from '../../components/brands/campaigns/CampaignsList';


export default function campaigns() {
  return <div className="flex flex-col gap-8 p-8">
    <Analytics />
    {/* <InsightChart /> */}
    <CampaignsList />
  </div>;
}

