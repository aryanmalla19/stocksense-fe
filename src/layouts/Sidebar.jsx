import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";
import Menu from "./Menu";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-6 ${
        theme === "dark"
          ? "bg-gray-900 text-white border-r border-gray-600"
          : "bg-gray-100 text-[#4D4D4D]"
      }`}
    >
      <header className="flex flex-col items-center justify-center lg:justify-start gap-2">
        <img src={logo} alt="logo" className="w-20 h-18" />
        <div className="hidden lg:block font-bold text-2xl ">Stockify</div>
      </header>
      <Menu />
    </div>
  );
};

export default Sidebar;
