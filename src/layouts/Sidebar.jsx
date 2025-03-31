import React, { useContext } from "react";
import logo from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";
import Menu from "./Menu";

const Sidebar = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`p-3 ${
        theme === "dark"
          ? "bg-[var(--dark-bg-primary)] text-[var(--dark-text-primary)] border-r border-[var(--dark-border-primary)]"
          : "bg-[var(--bg-primary)] text-[var(--text-primary)]"
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
