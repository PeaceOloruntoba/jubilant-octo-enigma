import React, { useEffect, useState } from "react";
import { FaSortUp, FaSortDown } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { BsArrowsAngleExpand } from "react-icons/bs";
import Button from "../../shared/Button";

const initialData = [
  {
    id: 1,
    advocates: "John Doe",
    email: "john.doe@mail.com",
    paymentMethod: "Paypal",
    amount: 40.25,
    date: "2021-10-20",
    status: "Pending",
  },
  {
    id: 2,
    advocates: "Jane Smith",
    email: "jane.smith@mail.com",
    paymentMethod: "Stripe",
    amount: 85.5,
    date: "2021-09-15",
    status: "Successful",
  },
  {
    id: 3,
    advocates: "Alex Brown",
    email: "alex.brown@mail.com",
    paymentMethod: "Bank Transfer",
    amount: 120.0,
    date: "2021-11-05",
    status: "Pending",
  },
];

const FILTER_OPTIONS = [
  { label: "Last 7 Days", value: "7d" },
  { label: "Last 30 Days", value: "30d" },
  { label: "Last 3 Months", value: "3m" },
  { label: "Last 6 Months", value: "6m" },
  { label: "Last 1 Year", value: "1y" },
  { label: "All Time", value: "all" },
];

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

  const sortData = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sortedData = [...data].sort((a, b) => {
      if (key === "amount") {
        return direction === "asc" ? a.amount - b.amount : b.amount - a.amount;
      }
      if (key === "date") {
        return direction === "asc"
          ? new Date(a.date) - new Date(b.date)
          : new Date(b.date) - new Date(a.date);
      }
      return direction === "asc"
        ? a[key].localeCompare(b[key])
        : b[key].localeCompare(a[key]);
    });

    setData(sortedData);
    setSortConfig({ key, direction });
  };

  return (
    <div className="p-4 border rounded-lg  shadow">
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
      <table className="w-full border-collapse  rounded-lg">
        <thead className="">
          <tr className="border-b text-left">
            <th className="p-4">
              <input
                type="checkbox"
                onChange={toggleSelectAll}
                checked={selectedRows.length === data.length}
              />
            </th>
            {[
              "advocates",
              "email",
              "paymentMethod",
              "amount",
              "date",
              "status",
            ].map((key) => (
              <th
                key={key}
                className="cursor-pointer"
                onClick={() => sortData(key)}
              >
                <div className="flex items-center uppercase gap-2">
                  {key.charAt(0) + key.slice(1)}
                  {sortConfig.key === key ? (
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
              <td className="">{row.advocates}</td>
              <td className="">{row.email}</td>
              <td className="">{row.paymentMethod}</td>
              <td className="">${row.amount.toFixed(2)}</td>
              <td className="">{row.date}</td>
              <td>
                <span
                  className={` font-semibold ${
                    row.status === "Pending"
                      ? "text-[#F0AD4E] bg-[#FCEFDC] py-2 px-4 rounded"
                      : "text-[#22BB33] bg-[#D3F1D6] py-2 px-4 rounded"
                  }`}
                >
                  {row.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
