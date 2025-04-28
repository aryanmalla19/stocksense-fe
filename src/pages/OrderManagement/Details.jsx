import React from "react";
import {
  MdOutlinePriceCheck,
  MdOutlineTrendingUp,
  MdOutlineTrendingDown,
} from "react-icons/md";
import { BsGraphUpArrow, BsGraphDownArrow } from "react-icons/bs";

const stockDetails = [
  {
    label: "Current Price",
    icon: <MdOutlinePriceCheck className="text-green-500" />,
    key: "current_price",
  },
  {
    label: "Open Price",
    icon: <BsGraphUpArrow className="text-blue-500" />,
    key: "open_price",
  },
  {
    label: "Close Price",
    icon: <BsGraphDownArrow className="text-red-500" />,
    key: "close_price",
  },
  {
    label: "High Price",
    icon: <MdOutlineTrendingUp className="text-yellow-500" />,
    key: "high_price",
  },
  {
    label: "Low Price",
    icon: <MdOutlineTrendingDown className="text-purple-500" />,
    key: "low_price",
  },
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
      <div className="flex flex-wrap gap-10 md:gap-24 ">
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
