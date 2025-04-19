import React from "react";
import { Link, useLocation } from "react-router-dom";
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
  { icon: <FiTrendingUp />, label: "Dashboard", href: "/" },
  { icon: <FiList />, label: "Stocks List", href: "/stocks" },
  { icon: <FiShoppingCart />, label: "Trade Stocks", href: "/buysell" },
  { icon: <FiStar />, label: "Watchlist", href: "/watch-list" },
  { icon: <FiPieChart />, label: "Portfolio", href: "/portfolio" },
  { icon: <FiLayers />, label: "IPO Applications", href: "/shares" },
];

const Menu = ({ collapsed, theme }) => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <div
      className={`flex flex-col justify-between h-screen text-lg ${
        theme === "dark" ? "text-white" : "text-gray-900"
      }`}
    >
      <div className="flex-1 overflow-y-auto py-10">
        <div className="mt-3">
          {menuItems.map((item) => {
            const isActive = currentPath === item.href;
            return (
              <Link
                to={item.href}
                key={item.label}
                className={`flex items-center px-6 py-3 text-[16px] font-medium transition-colors duration-200 mx-3 rounded-md 
                ${
                  isActive
                    ? theme === "dark"
                      ? "bg-button-bg"
                      : "bg-gray-200"
                    : ""
                } 
                ${
                  theme === "dark" ? "hover:font-semibold" : "hover:bg-gray-100"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                {!collapsed && (
                  <span className="hidden md:inline">{item.label}</span>
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-40">
          <hr
            className={`border ${
              theme === "dark" ? "border-[#616161]" : "border-[#EEEEEE]"
            }`}
          />
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
