import React from "react";
import { Link } from "react-router-dom";
import {
  FaChartLine,
  FaRegDotCircle,
  FaRegListAlt,
  FaUser,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa"; // Import the icons from react-icons

const menuItems = [
  {
    title: "MARKET",
    items: [
      {
        icon: <FaChartLine />, // React Icon for Market Overview
        label: "Market Overview",
        href: "/market-overview",
      },
      {
        icon: <FaRegDotCircle />, // React Icon for Stocks
        label: "Stocks",
        href: "/stocks",
      },
      {
        icon: <FaRegListAlt />, // React Icon for Watchlist
        label: "Watchlist",
        href: "/watchlist",
      },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      {
        icon: <FaUser />, // React Icon for Profile
        label: "Profile",
        href: "/profile",
      },
      {
        icon: <FaCog />, // React Icon for Settings
        label: "Settings",
        href: "/settings",
      },
      {
        icon: <FaSignOutAlt />, // React Icon for Logout
        label: "Logout",
        href: "/logout",
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="text-sm">
      {menuItems.map((category) => (
        <div className="flex flex-col gap-2" key={category.title}>
          <span className="hidden lg:block text-gray-700 font-semibold my-4">
            {category.title}
          </span>
          {category.items.map((item) => (
            <Link
              to={item.href}
              key={item.label}
              className="flex items-center justify-center lg:justify-start gap-4 text-gray-700 py-2 hover:bg-stone-100 px-1 rounded"
            >
              {/* Render the icon directly from React Icons */}
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
