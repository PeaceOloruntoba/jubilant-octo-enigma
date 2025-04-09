import React from "react";
import {
  FiDownload,
  FiMaximize,
  FiChevronDown,
  FiChevronUp,
} from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { BsArrowsAngleExpand } from "react-icons/bs";

const companyData = [
  { name: "Company Name", commission: "20 Percent", revenue: "$12,500.00" },
  { name: "Company Name", commission: "20 Percent", revenue: "$12,500.00" },
  { name: "Company Name", commission: "20 Percent", revenue: "$12,500.00" },
];

const productData = [
  { name: "Product Name", platform: "Youtube", revenue: "$12,500.00" },
  { name: "Product Name", platform: "Youtube", revenue: "$12,500.00" },
  { name: "Product Name", platform: "Youtube", revenue: "$12,500.00" },
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
  <th className="py-2">
    <div className="flex items-center gap-1">
      {label}
      <div className="flex flex-col text-xs text-gray-400 leading-tight">
        <FiChevronUp />
        <FiChevronDown className="-mt-1" />
      </div>
    </div>
  </th>
);

const Top = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* === Top Companies Table === */}
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-lg font-semibold">Top Companies</h2>
            <p className="text-sm text-gray-400">Lorem ipsum dolor</p>
          </div>
          <div className="flex items-center gap-2">
            <Dropdown />
            <button className="flex  justify-row gap-2 p-2 text-gray-500 text-lg border rounded-lg">
              <LuDownload size={14} />
              <BsArrowsAngleExpand size={14} />
            </button>
           
          </div>
        </div>
        <table className="w-full text-sm mt-4">
          <thead className="text-gray-500 text-left">
            <tr>
              <th></th>
              <SortableHeader label="COMPANIES" />
              <SortableHeader label="COMMISSION" />
              <SortableHeader label="REVENUE" />
            </tr>
          </thead>
          <tbody>
            {companyData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3">
                  <input type="checkbox" />
                </td>
                <td className="py-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  {item.name}
                </td>
                <td className="py-3">{item.commission}</td>
                <td className="py-3">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4 text-gray-500 text-sm">42 / 120</div>
      </div>

      {/* === Top Products Table === */}
      <div className="bg-white rounded-2xl shadow p-4">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h2 className="text-lg font-semibold">Top Products</h2>
            <p className="text-sm text-gray-400">Lorem ipsum dolor</p>
          </div>
          <div className="flex items-center gap-2">
            <Dropdown />
            <button className="flex  justify-row gap-2 p-2 text-gray-500 text-lg border rounded-lg">
              <LuDownload size={14} />
              <BsArrowsAngleExpand size={14} />
            </button>
         
          </div>
        </div>
        <table className="w-full text-sm mt-4">
          <thead className="text-gray-500 text-left">
            <tr>
              <th></th>
              <SortableHeader label="PRODUCTS" />
              <SortableHeader label="PLATFORMS" />
              <SortableHeader label="REVENUE" />
            </tr>
          </thead>
          <tbody>
            {productData.map((item, index) => (
              <tr key={index} className="border-t">
                <td className="py-3">
                  <input type="checkbox" />
                </td>
                <td className="py-3 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                  {item.name}
                </td>
                <td className="py-3">{item.platform}</td>
                <td className="py-3">{item.revenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="text-center mt-4 text-gray-500 text-sm">42 / 120</div>
      </div>
    </div>
  );
};

export default Top;
