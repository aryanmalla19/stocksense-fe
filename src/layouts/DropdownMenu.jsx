import React from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { Link } from "react-router-dom";

const DropdownMenu = ({
  label,
  items,
  isOpen,
  toggle,
  currentPath,
  collapsed,
}) => {
  return (
    <div>
      <div
        onClick={toggle}
        className={`flex items-center justify-between pl-2 py-2 rounded-md cursor-pointer transition-colors duration-200`}
      >
        <div className="flex items-center">
          <span className="mr-3 text-lg">{label.icon}</span>
          {!collapsed && (
            <span className="hidden md:inline">{label.label}</span>
          )}
        </div>
        {!collapsed && (
          <span className="hidden md:inline">
            {isOpen ? <FiChevronUp /> : <FiChevronDown />}
          </span>
        )}
      </div>

      {isOpen && !collapsed && (
        <div className="mt-1">
          {items.map((subItem) => {
            const isActive = currentPath === subItem.href;
            return (
              <Link
                to={subItem.href}
                key={subItem.label}
                className={`flex items-center px-4 py-2 text-[15px] font-medium transition-colors duration-200 mx-3 rounded-md 
                ${isActive ? "bg-purple-button text-white" : ""}`}
              >
                <span className="hidden md:inline">{subItem.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
