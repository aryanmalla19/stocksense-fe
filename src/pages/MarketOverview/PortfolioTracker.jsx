import React from "react";
import { FaWallet, FaDollarSign } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";
import { FaArrowTrendUp } from "react-icons/fa6";

const PortfolioTracker = () => {
  const items = [
    {
      title: "Portfolio Value",
      data: "$5,331.90",
      icon: FaWallet,
      stats: "+2.5% from last month",
    },
    {
      title: "Today's Change",
      data: "+966.30 (22.13%)",
      icon: FaArrowTrendUp,
      stats: "+2.5% from last month",
    },
    {
      title: "Invested Amount",
      data: "$4,365.60",
      icon: FaDollarSign,
      stats: "+2.5% from last month",
    },
    {
      title: "Current Holdings",
      data: "$4,365.60",
      icon: FaDollarSign,
      stats: "+2.5% from last month",
    },
  ];

  return (
    <div className="flex flex-wrap justify-between items-center rounded-xl pb-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex items-start justify-between border border-gray-500 w-[23%] bg-[#1e3c72] text-white py-6 px-6 rounded-md shadow-lg"
        >
          <div className="">
            <h3 className="text-base pb-1 font-medium">{item.title}</h3>
            <p className="text-xl font-bold">{item.data}</p>
            <p className="text-sm">{item.stats}</p>
          </div>
          <item.icon className={`text-lg ${item.color} text-teal-500`} />
        </div>
      ))}
    </div>
  );
};

export default PortfolioTracker;
