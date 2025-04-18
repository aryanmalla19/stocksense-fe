import React from "react";
import { Link } from "react-router-dom";
import {
  FiTrendingUp,
  FiList,
  FiStar,
  FiPieChart,
  FiLayers,
  FiShoppingCart,
} from "react-icons/fi";
import { IoMdHelpCircleOutline } from "react-icons/io";

const menuItems = [
  {
    title: "Market Open",
    items: [
      { icon: <FiTrendingUp />, label: "Dashboard", href: "/" },
      { icon: <FiList />, label: "Stocks List", href: "/stocks" },
      { icon: <FiShoppingCart />, label: "Trade Stocks", href: "/buysell" },
      { icon: <FiStar />, label: "Watchlist", href: "/watch-list" },
    ],
  },
  {
    title: "PORTFOLIO",
    items: [
      { icon: <FiPieChart />, label: "Portfolio", href: "/portfolio" },
      { icon: <FiLayers />, label: "IPO Applications", href: "/shares" },
    ],
  },
];

const Menu = ({ collapsed, theme }) => {
  return (
    <div
      className={`flex flex-col justify-between h-screen text-lg ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="flex-1 overflow-y-auto py-10">
        {menuItems.map((category) => (
          <div className="mb-6" key={category.title}>
            {!collapsed && (
              <button className="hidden md:inline px-6 py-2 text-[15px] font-semibold uppercase tracking-wider bg-teal-700 hover:bg-teal-800 text-white rounded-md ml-5">
                {category.title}
              </button>
            )}
            <div className="mt-3">
              {category.items.map((item) => (
                <Link
                  to={item.href}
                  key={item.label}
                  className={`flex items-center px-6 py-3 text-[16px] font-medium transition-colors duration-200 mx-3 rounded-md ${
                    theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
                  }`}
                >
                  <span className="mr-3 text-lg">{item.icon}</span>
                  {!collapsed && (
                    <span className="hidden md:inline">{item.label}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="mt-40">
          <hr
            className={`border ${
              theme === "dark" ? "border-[#616161]" : "border-[#EEEEEE]"
            }`}
          ></hr>
          <span className="flex justify-center items-center gap-2 my-2">
            <IoMdHelpCircleOutline />
            <p className="text-[15px] font-semibold">Help</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Menu;
