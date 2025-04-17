import React from "react";
import { FaEye, FaChartBar } from "react-icons/fa";

const TooltipIcon = () => {
  const actionButton = [
    { icon: <FaEye />, tooltip: "Add to Watchlist" },
    { icon: <FaChartBar />, tooltip: "View Chart" },
  ];
  return (
    <div className="flex gap-4 ml-auto">
      {actionButton.map((btn, index) => (
        <div key={index} className="relative group inline-block ">
          <button className="px-3 py-2 border-2 border-gray-500 rounded-md">
            {btn.icon}
          </button>
          {/* Tooltip */}
          <div
            className="absolute bottom-full w-30 text-center font-semibold left-1/2 transform -translate-x-1/2 mb-2
        bg-gray-700 text-white text-sm b p-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-10"
          >
            {btn.tooltip}
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-2/3 w-2 h-2 bg-gray-700 rotate-45"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TooltipIcon;
