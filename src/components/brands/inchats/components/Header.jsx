// Header.js
import React, { useState, useEffect } from "react";
import { Icons } from "./Icons";

const Header = ({ onClear, onNew }) => {
  const [loadedTime, setLoadedTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setLoadedTime(formattedTime);
  }, []);

  return (
    <div className="flex items-center justify-end px-4 py-2 border-b text-sm bg-white gap-3">
      <span className="text-gray-500">Last Updated: {loadedTime}</span>

      <button
        onClick={onClear}
        className="flex items-center gap-2 px-4 py-1.5 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 transition"
      >
        <Icons.Trash className="text-sm" />
        Clear chat
      </button>

      <button
        onClick={onNew}
        className="flex items-center gap-2 px-4 py-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 transition"
      >
        <Icons.Plus className="text-sm" />
        New Chat
      </button>
    </div>
  );
};

export default Header;
