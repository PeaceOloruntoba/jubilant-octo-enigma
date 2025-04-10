// Header.js
import React, {useState, useEffect} from "react";
import { Icons } from "./Icons";

const Header = ({ onClear, onNew }) => {
  const [loadedTime, setLoadedTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Format time as HH:MM:SS
    setLoadedTime(formattedTime);
  }, []); // Runs once when the component mounts


  return (
    <div className="flex items-center justify-between px-4 py-2 border-b text-sm">
      <span className="text-gray-500">Last Updated: {loadedTime}</span>
      <div className="flex gap-2">
        <button
          onClick={onClear}
          className="flex items-center gap-1 px-3 py-1 border rounded hover:bg-gray-100"
        >
          <Icons.Trash className="text-sm" /> Clear chat
        </button>
        <button
          onClick={onNew}
          className="flex items-center gap-1 px-3 py-1 text-white bg-red-600 rounded hover:bg-red-700"
        >
          <Icons.Plus className="text-sm" /> New Chat
        </button>
      </div>
    </div>
  );
};

export default Header;
