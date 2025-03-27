import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={` p-8 flex items-center justify-between ${
        theme === "dark"
          ? "bg-gray-900 text-white border-b border gray-300"
          : "bg-gray-100 text-black "
      }`}
    >
      <h2>Dashboard</h2>
      {theme === "dark" ? (
        <FaMoon className="w-6 h-6 text-[#FFFFFF]" onClick={toggleTheme} />
      ) : (
        <FaSun className="w-6 h-6 text-[#4D4D4D]" onClick={toggleTheme} />
      )}
    </div>
  );
};

export default Navbar;
