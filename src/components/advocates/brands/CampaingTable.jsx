// 


import React, { useEffect, useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Button from "../../shared/Button";

// Initial dummy data
const initialData = [
  {
    id: 1,
    campaignId: "PID1001",
    title: "product name",
    duration: "5 Days",
    brand: "lorem ipsum",
    category: "finance",
    commission: "40 percent",
    status: "Active",
  },
  {
    id: 2,
    campaignId: "PID1002",
    title: "product name 2",
    duration: "3 Days",
    brand: "lorem ipsum",
    category: "tech",
    commission: "30 percent",
    status: "Active",
  },
  {
    id: 3,
    campaignId: "PID1003",
    title: "product name 3",
    duration: "7 Days",
    brand: "lorem ipsum",
    category: "education",
    commission: "50 percent",
    status: "Pending",
  },
];

// Filter options
const FILTER_OPTIONS = [
  { label: "Last 7 Days", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
  { label: "Last 3 Months", value: "3m" },
  { label: "Last 6 Months", value: "6m" },
  { label: "Last 1 Year", value: "1y" },
  { label: "All Time", value: "all" },
];

// Mapping of column header to object keys
const COLUMN_KEY_MAP = {
  CAMPAIGNID: "campaignId",
  TITLE: "title",
  DURATION: "duration",
  BRAND: "brand",
  CATEGORY: "category",
  "COMMISSION RATE": "commission",
  STATUS: "status",
  ACTION: "",
};

export default function CampaignTable() {
  const [selectedFilter, setSelectedFilter] = useState("30d");
  const [data, setData] = useState(initialData);
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortConfig, setSortConfig] = useState({ key: "", direction: "asc" });

  const toggleRowSelection = (id) => {
    setSelectedRows((prev) =>
      prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]
    );
  };

  const toggleSelectAll = () => {
    if (selectedRows.length === data.length) {
      setSelectedRows([]);
    } else {
      setSelectedRows(data.map((row) => row.id));
    }
  };

  const sortData = (columnHeader) => {
    const key = COLUMN_KEY_MAP[columnHeader];
    if (!key) return;

    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      // Special numeric logic for commission
      if (key === "commission") {
        const numA = parseFloat(aVal);
        const numB = parseFloat(bVal);
        return direction === "asc" ? numA - numB : numB - numA;
      }

      // General numeric logic (optional: id/duration if numeric)
      if (!isNaN(aVal) && !isNaN(bVal)) {
        return direction === "asc" ? aVal - bVal : bVal - aVal;
      }

      // Default string comparison
      return direction === "asc"
        ? String(aVal).localeCompare(String(bVal))
        : String(bVal).localeCompare(String(aVal));
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-4 border rounded-lg shadow">
      <div className="flex items-center justify-between bg-white dark:bg-black text-black dark:text-white ">
        <div className="flex flex-col">
          <span className="text-[22px] font-medium">All Campaigns</span>
          <span className="text-[16px] text-[#9D9B9B]">Lorem ipsum dolor</span>
        </div>
        <div className="flex items-center gap-6">
          <select
            value={selectedFilter}
            onChange={(e) => setSelectedFilter(e.target.value)}
            className="border border-gray-300 rounded-lg px-2 py-1 text-xl outline-none text-lg shadow"
          >
            {FILTER_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <Button
            value={
              <div className="flex gap-4 px-1 items-center">
                <LuDownload size={14} />
                <BsArrowsAngleExpand size={14} />
              </div>
            }
            className={"bg-[#F2F0F0] rounded-lg p-2"}
          />
        </div>
      </div>

      <table className="w-full border-collapse rounded-lg mt-4 overflow-x-auto">
        <thead>
          <tr className="border-b text-left">
            <th className="p-4">
              <input
                type="checkbox"
                onChange={toggleSelectAll}
                checked={selectedRows.length === data.length}
              />
            </th>
            {Object.keys(COLUMN_KEY_MAP).map((header) => (
              <th
                key={header}
                className="cursor-pointer p-4"
                onClick={() => sortData(header)}
              >
                <div className="flex items-center uppercase gap-2">
                  {header}
                  {sortConfig.key === COLUMN_KEY_MAP[header] ? (
                    sortConfig.direction === "asc" ? (
                      <FaSortUp />
                    ) : (
                      <FaSortDown />
                    )
                  ) : (
                    <FaSortDown className="opacity-50" />
                  )}
                </div>
              </th>
            ))}
            {/* <th className="p-4">ACTION</th> */}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id} className="hover:bg-gray-100 border-b">
              <td className="p-4">
                <input
                  type="checkbox"
                  checked={selectedRows.includes(row.id)}
                  onChange={() => toggleRowSelection(row.id)}
                />
              </td>
              <td className="p-4">{row.campaignId}</td>
              <td className="p-4">{row.title}</td>
              <td className="p-4">{row.duration}</td>
              <td className="p-4">{row.brand}</td>
              <td className="p-4">{row.category}</td>
              <td className="p-4">{row.commission}</td>
              <td className="p-4">
                <span
                  className={`font-semibold ${
                    row.status === "Pending"
                      ? "text-[#F0AD4E] bg-[#FCEFDC]"
                      : "text-[#22BB33] bg-[#D3F1D6]"
                  } py-2 px-4 rounded`}
                >
                  {row.status}
                </span>
              </td>
              <td className="p-4">
                <button className="bg-blue-500 text-white rounded px-3 py-1">
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
