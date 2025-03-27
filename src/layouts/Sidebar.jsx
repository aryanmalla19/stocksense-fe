import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Menu from "./Menu";
import logo from "../assets/logo.png";
import { ThemeContext } from "../context/ThemeContext";

const Sidebar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div>
      <Link to="/home">
        <header className="flex flex-col items-center justify-center lg:justify-start gap-2">
          <img src={logo} alt="logo" className="w-20 h-18" />
          <div className="hidden lg:block font-bold text-2xl text-[#4D4D4D]">
            Stockify
          </div>
        </header>
      </Link>
      <Menu />
    </div>
  );
};

export default Sidebar;
