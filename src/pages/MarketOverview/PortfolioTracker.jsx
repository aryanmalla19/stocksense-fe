import React from "react";
import { FaWallet, FaDollarSign, FaArrowUp } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const PortfolioTracker = () => {
  const items = [
    {
      title: "Portfolio Value",
      data: "$5,331.90",
      icon: FaWallet,
    },
    {
      title: "Today's Change",
      data: "+966.30 (22.13%)",
      icon: FaArrowUp,
    },
    {
      title: "Invested Amount",
      data: "$4,365.60",
      icon: FaDollarSign,
    },
  ];

  return (
    <div className="flex flex-wrap gap-4 justify-center items-center rounded-xl py-6">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-1 items-center gap-4 bg-[#1e3c72] text-white py-8 px-6 rounded-md shadow-lg "
        >
          <item.icon className={`text-3xl ${item.color} text-teal-500`} />
          <div>
            <h3 className="text-2xl font-medium text-gray-300">{item.title}</h3>
            <p className="text-xl font-bold">{item.data}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PortfolioTracker;
