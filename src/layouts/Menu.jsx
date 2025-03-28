import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

import {
  FaChartLine,
  FaRegDotCircle,
  FaRegListAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";

const menuItems = [
  {
    title: "MARKET",
    items: [
      {
        icon: <FaChartLine />,
        label: "Market Overview",
        href: "/market-overview",
      },
      { icon: <FaRegDotCircle />, label: "Stocks List", href: "/stocks" },
      { icon: <FaRegListAlt />, label: "Watchlist", href: "/watchlist" },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { icon: <FaUser />, label: "Profile", href: "/profile" },
      { icon: <FaCog />, label: "Settings", href: "/settings" },
      { icon: <FaSignOutAlt />, label: "Logout", href: "/logout" },
    ],
  },
];

const Menu = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`text-sm flex flex-col min-h-screen gap-30 p-4 ${
        theme === "dark" ? "text-white" : "text-gray-900 "
      }`}
    >
      {menuItems.map((category) => (
        <div className="flex flex-col gap-2 " key={category.title}>
          {/* Fix category title color */}
          <span
            className={`hidden lg:block font-semibold my-4 ${
              theme === "dark"
                ? "text-gray-300 bg-teal-700 w-20 p-2 rounded-lg "
                : "text-white bg-teal-700 w-20 p-2 rounded-lg "
            }`}
          >
            {category.title}
          </span>

          {category.items.map((item) => (
            <Link
              to={item.href}
              key={item.label}
              className={`flex items-center justify-center lg:justify-start gap-4 py-2 px-4 rounded transition-colors duration-300
                ${
                  theme === "dark"
                    ? "text-white hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
            >
              <span className="w-5 h-5">{item.icon}</span>
              <span className="hidden lg:block">{item.label}</span>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Menu;
