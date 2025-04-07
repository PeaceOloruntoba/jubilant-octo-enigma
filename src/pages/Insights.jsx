import React from 'react'
import Analytics from '../components/brands/insights/Analytics';
import Top from '../components/brands/insights/Top';

export default function Insights() {
  return <div className="flex flex-col gap-8 p-8">
    <Analytics />
    <Top />
  </div>;
}
