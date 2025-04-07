import React, { useEffect } from "react";
import { FiMessageSquare, FiRotateCw, FiPlus } from "react-icons/fi";

const ChatHome = () => {
  const [loadedTime, setLoadedTime] = useState("");

  useEffect(() => {
    const now = new Date();
    const formattedTime = now.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }); // Format time as HH:MM:SS
    setLoadedTime(formattedTime);
  }, []); // Runs once when the component mounts
  const exampleQuestions = Array(9).fill(
    "How do I get started with Market!N !NChat?"
  );

  return (
    <div className="min-h-screen bg-gray-50 p-6 flex flex-col">
      {/* Top Bar */}
      <div className="flex justify-end items-center gap-4 mb-10">
        <span className="text-sm text-gray-500">Last Updated: {loadedTime}</span>
        <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-300 rounded-md text-sm text-gray-700 hover:bg-gray-100">
          <FiRotateCw />
          Clear chat
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700">
          <FiPlus />
          New Chat
        </button>
      </div>

      {/* Center Content */}
      <div className="flex flex-col items-center justify-center flex-1">
        <FiMessageSquare className="text-4xl text-gray-700 mb-2" />
        <h2 className="text-xl font-semibold mb-8">Examples</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl">
          {exampleQuestions.map((text, index) => (
            <button
              key={index}
              className="bg-white text-gray-700 text-sm rounded-lg px-4 py-3 shadow-sm border border-gray-100 hover:shadow-md transition"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChatHome;
