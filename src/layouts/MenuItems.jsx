import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, currentPath, theme, collapsed }) => {
  const isActive = currentPath === item.href;

  return (
    <Link
      to={item.href}
      key={item.label}
      className={`flex w-full min-w-[200px] items-center px-6 py-3 text-[16px] font-medium transition-colors duration-200  rounded-md 
      ${
        isActive
          ? theme === "dark"
            ? "bg-[#923EB9]"
            : "bg-[#923EB9] text-dark-text"
          : ""
      } 
      `}
    >
      <span className="mr-3 text-lg">{item.icon}</span>
      {!collapsed && <span className="hidden md:inline">{item.label}</span>}
    </Link>
  );
};

export default MenuItem;
