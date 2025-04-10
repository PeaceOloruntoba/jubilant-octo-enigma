import React from "react";
import {
  FiDownload,
  FiChevronDown,
  FiChevronUp,
  FiEdit,
  FiTrash2,
} from "react-icons/fi";
import { LuDownload } from "react-icons/lu";
import { BsArrowsAngleExpand } from "react-icons/bs";

// Sample data for the advocates table
const advocatesData = [
  { name: "John Doe", email: "john.doe@mail.com", role: "Ambassador", paymentMethod: "Paypal", sales: 109, commissionRate: "30 percent", status: "Active" },
  { name: "John Doe", email: "john.doe@mail.com", role: "Influencer", paymentMethod: "Paypal", sales: 109, commissionRate: "30 percent", status: "Active" },
  { name: "John Doe", email: "john.doe@mail.com", role: "Ambassador", paymentMethod: "Paypal", sales: 109, commissionRate: "30 percent", status: "Inactive" },
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

const AdvocatesList = () => {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h2 className="text-xl font-semibold">Advocates List</h2>
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
            <SortableHeader label="ADVOCATES" />
            <SortableHeader label="EMAIL" />
            <SortableHeader label="ROLES" />
            <SortableHeader label="PAYMENT METHOD" />
            <SortableHeader label="SALES" />
            <SortableHeader label="COMMISSION RATE" />
            <SortableHeader label="STATUS" />
            <th className="py-3">ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          {advocatesData.map((item, index) => (
            <tr key={index} className="border-t">
              <td className="py-3">
                <input type="checkbox" />
              </td>
              <td className="py-3 flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-gray-200"></div>
                {item.name}
              </td>
              <td className="py-3">{item.email}</td>
              <td className="py-3">{item.role}</td>
              <td className="py-3">{item.paymentMethod}</td>
              <td className="py-3">{item.sales}</td>
              <td className="py-3">{item.commissionRate}</td>
              <td className="py-3">
                <button className={`py-1 px-4 rounded-full text-white text-xs ${item.status === "Active" ? 'bg-green-500' : 'bg-red-500'}`}>
                  {item.status}
                </button>
              </td>
              <td className="py-3 flex gap-2">
                {/* Updated Action Buttons to match gray icon style */}
                <button className="text-gray-500 p-2">
                  <FiEdit size={16} />
                </button>
                <button className="text-gray-500 p-2">
                  <FiTrash2 size={16} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex justify-between items-center mt-4 text-gray-500 text-sm">
        <span>Showing 1 of 25 Results</span>
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

export default AdvocatesList;
