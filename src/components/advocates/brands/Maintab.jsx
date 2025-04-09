import React, { useState } from "react";
import Brands from "./Brands";
// import CampaignsPage from "./CampaignsPage"; // 👈 create this later
import Header from "./Header";
import CampaignTable from "./CampaingTable";

const Maintab = () => {
  const [activeTab, setActiveTab] = useState("brands");

  return (
    <div className="p-6 space-y-4">
      <Header/>
      

      {/* Tabs */}
      <div className="flex gap-6 border-b">
        <button
          onClick={() => setActiveTab("brands")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "brands"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          Brands
        </button>
        <button
          onClick={() => setActiveTab("campaigns")}
          className={`pb-2 text-sm font-medium ${
            activeTab === "campaigns"
              ? "text-red-600 border-b-2 border-red-600"
              : "text-gray-500"
          }`}
        >
          Campaigns
        </button>
      </div>

      {/* Tab Content */}
      <div>{activeTab === "brands" ? <Brands/> : <CampaignTable/>}</div>
    </div>
  );
};

export default Maintab;
