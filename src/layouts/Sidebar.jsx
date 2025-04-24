import React from "react";
import logo from "../assets/logo.png";
import Menu from "./Menu";

const Sidebar = ({ collapsed, theme }) => {
  return (
    <div
      className={`p-2  ${
        theme === "dark"
          ? "bg-[#000000] text-white "
          : "bg-light-bg  border border-r-gray-300 text-[#757575]"
      }`}
    >
      <header className="flex flex-col items-center justify-between lg:justify-start gap-2">
        <div className="flex flex-col items-center mt-3 justify-between gap-4">
          <img src={logo} alt="logo" className="w-20 h-20 mr-3" />
          {!collapsed && (
            <p className="hidden lg:block font-bold mr-5 text-2xl ">
              Stock Sense
            </p>
          )}
        </div>
      </header>
      <Menu collapsed={collapsed} theme={theme} />
    </div>
  );
};

export default Sidebar;
