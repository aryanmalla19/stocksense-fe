import React from "react";

const StockInfobadge = ({ label, value, bgColor }) => {
  return (
    <div>
      <li className="flex items-center gap-2 font-semibold text-gray-400">
        <span>{label}:</span>
        <span
          className={`px-3 py-1 rounded-md text-white font-bold transition ${bgColor}`}
        >
          {value}
        </span>
      </li>
    </div>
  );
};

export default StockInfobadge;
