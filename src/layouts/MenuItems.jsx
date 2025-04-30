import React from "react";
import { Link } from "react-router-dom";

const MenuItem = ({ item, currentPath, theme, collapsed }) => {
  const isActive = currentPath === item.href;

  return (
    <Link
      to={item.href}
      key={item.label}
      className={`flex justify-start pl-2 w-full min-w-[200px] items-center text-center py-3 text-[16px] font-medium transition-colors duration-200  rounded-md 
      ${
        isActive
          ? theme === "dark"
            ? "bg-purple-button"
            : "bg-purple-button text-dark-text"
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
