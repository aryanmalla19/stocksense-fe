import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";
import Menu from "./Menu";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-2 border-r ${
        theme === "dark"
          ? "bg-[var(--dark-bg-primary)] text-[var(--dark-text-primary)] border-[var(--dark-border-primary)]"
          : "bg-gray-100  border-[var(--border-primary)] text-[var(--text-primary)]"
      }`}
    >
      <header className="flex flex-col items-center justify-between lg:justify-start gap-2">
        <div className="flex items-center mt-3 justify-between">
          <img src={logo} alt="logo" className="w-18 h-12 mr-3" />
          <p className="hidden lg:block font-bold mr-5 text-2xl ">Stockify</p>
        </div>
      </header>
      <Menu />
    </div>
  );
};

export default Sidebar;
