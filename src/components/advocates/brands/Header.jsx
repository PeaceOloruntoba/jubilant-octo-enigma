import React, { useState } from "react";
import { Filter, Share2 } from "lucide-react";


const Header = () => {
  return (
    <div className="">
      {/* Header */}
      <div className="flex justify-between items-start flex-wrap gap-2">
        <div>
          <h2 className="text-xl font-semibold text-gray-800">
            Brands & Campaigns
          </h2>
        </div>

        <div className="flex items-center gap-2 text-sm text-gray-500">
          <span>Last Updated: 14:23</span>
          <button className="border px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-1">
            <Filter size={16} /> Filter
          </button>
          <button className="border px-3 py-1 rounded-md hover:bg-gray-100 flex items-center gap-1">
            <Share2 size={16} /> Share
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
