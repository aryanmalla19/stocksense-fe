import React, { useContext, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import ProfileImage from "../components/common/ProfileImage";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div
      className={`px-6 py-4 border-b flex items-center justify-between ${
        theme === "dark"
          ? "bg-[var(--dark-bg-primary)] border-[var(--dark-border-primary)] text-[var(--dark-text-primary)]"
          : "bg-[var(--bg-primary)] border-[var(--border-primary)] text-[var(--text-primary)]"
      }`}
    >
      {/* Welcome Text */}
      <h2 className="font-semibold text-xl md:text-lg">
        Welcome to{" "}
        <span className="text-[var(--dark-text-accent)]">Stockify</span>,
        <span className="text-xl md:text-lg px-2 font-bold text-[var(--dark-text-accent)]">
          Neetu Rai
        </span>
      </h2>

      {/* Navbar Icons */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <IoIosNotifications className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex justify-center items-center rounded-full">
            1
          </div>
        </div>

        {/* Theme Toggle Button */}
        <div
          className="w-6 h-6 flex items-center justify-center rounded-full cursor-pointer transition-all hover:scale-110"
          onClick={toggleTheme}
        >
          {theme === "dark" ? (
            <MdLightMode className="w-6 h-6" />
          ) : (
            <MdDarkMode className="w-5 h-5 text-[var(--text-primary)]" />
          )}
        </div>

        {/* Profile Image */}
        <ProfileImage />
      </div>
    </div>
  );
};

export default Navbar;
