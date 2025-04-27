import React from "react";
import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaChartBar,
  FaDollarSign,
} from "react-icons/fa";

const stockDetails = [
  { label: "Current Price", icon: <FaChartLine />, key: "current_price" },
  { label: "Open Price", icon: <FaArrowUp />, key: "open_price" },
  { label: "Close Price", icon: <FaArrowDown />, key: "close_price" },
  { label: "High Price", icon: <FaChartBar />, key: "high_price" },
  { label: "Low Price", icon: <FaDollarSign />, key: "low_price" },
];

const StockDetailItem = ({ icon, label, value }) => (
  <div className="flex flex-col items-center">
    <div className="flex items-center gap-1 text-md">
      {icon}
      <span>{label}</span>
    </div>
    <div className={`mt-1  rounded-md `}>{value ?? ""}</div>
  </div>
);

const Details = ({ selectedStock, theme }) => {
  return (
    <div
      className={`font-semibold rounded ${
        theme === "dark" ? "text-white" : "text-black"
      }`}
    >
      <div className="flex flex-wrap gap-8 justify-between">
        {stockDetails.map((item, idx) => (
          <StockDetailItem
            key={idx}
            icon={item.icon}
            label={item.label}
            value={selectedStock?.[item.key]}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
};

export default Details;
