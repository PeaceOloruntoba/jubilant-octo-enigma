import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi"; // Kept these for sorting
import { LuDownload } from "react-icons/lu";
import { BsArrowsAngleExpand } from "react-icons/bs";

// Sample data for the campaign table
const campaignsData = [
  { id: "CID1001", title: "Campaign Name", duration: "5 Days", category: "Finance", advocates: "Advocates", budget: "$40.25", targetCus: "10,000", status: "Active" },
  { id: "CID1002", title: "Campaign Name", duration: "5 Days", category: "Finance", advocates: "Advocates", budget: "$40.25", targetCus: "10,000", status: "Completed" },
  { id: "CID1003", title: "Campaign Name", duration: "5 Days", category: "Finance", advocates: "Advocates", budget: "$40.25", targetCus: "10,000", status: "Active" },
  { id: "CID1004", title: "Campaign Name", duration: "5 Days", category: "Finance", advocates: "Advocates", budget: "$40.25", targetCus: "10,000", status: "Cancelled" },
  { id: "CID1005", title: "Campaign Name", duration: "5 Days", category: "Finance", advocates: "Advocates", budget: "$40.25", targetCus: "10,000", status: "Completed" },
  // Add more entries as needed
];

const Dropdown = () => (
  <div className="relative">
    <select className="appearance-none text-sm border rounded px-2 py-1 pr-6">
      <option>Last week</option>
    </select>
    <FiChevronDown className="absolute right-2 top-2.5 text-gray-500 pointer-events-none" />
  </div>
);

const SortableHeader = ({ label }) => (
  <th className="py-2 text-sm text-gray-500">
    <div className="flex items-center gap-1">
      {label}
      <div className="flex flex-col text-xs text-gray-400 leading-tight">
        <FiChevronUp />
        <FiChevronDown className="-mt-1" />
      </div>
    </div>
  </th>
);

const CampaignsList = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold">Campaign Table</h2>
          <p className="text-sm text-gray-400">Lorem ipsum dolor</p>
        </div>
        <div className="flex items-center gap-4">
          <Dropdown />
          <button className="flex gap-2 p-2 text-gray-500 text-lg border rounded-lg">
            <LuDownload size={14} />
            <BsArrowsAngleExpand size={14} />
          </button>
        </div>
      </div>

      <table className="w-full text-sm mt-4">
        <thead className="text-gray-500 text-left">
          <tr>
            <th></th>
            <SortableHeader label="CAMPAIGN ID" />
            <SortableHeader label="CAMPAIGN TITLE" />
            <SortableHeader label="DURATION" />
            <SortableHeader label="CATEGORY" />
            <SortableHeader label="ADVOCATES" />
            <SortableHeader label="BUDGET" />
            <SortableHeader label="TARGET CUS." />
            <SortableHeader label="STATUS" />
          </tr>
        </thead>
        <tbody>
          {campaignsData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3">
                <input type="checkbox" />
              </td>
              <td className="py-3">{item.id}</td>
              <td className="py-3">{item.title}</td>
              <td className="py-3">{item.duration}</td>
              <td className="py-3">{item.category}</td>
              <td className="py-3">{item.advocates}</td>
              <td className="py-3">{item.budget}</td>
              <td className="py-3">{item.targetCus}</td>
              <td className="py-3">
                <button className={`py-1 px-4 rounded-full text-white text-xs ${item.status === "Active" ? 'bg-green-500' : item.status === "Completed" ? 'bg-blue-500' : 'bg-red-500'}`}>
                  {item.status}
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <span>Showing 1 of 15 Results</span>
        <div className="flex gap-2">
          <button className="bg-red-500 text-white py-2 px-4 rounded">1</button>
          <button className="py-2 px-4 rounded">2</button>
          <button className="py-2 px-4 rounded">3</button>
          <button className="py-2 px-4 rounded">...</button>
          <button className="py-2 px-4 rounded">Next</button>
        </div>
      </div>
    </div>
  );
};

export default CampaignsList;
