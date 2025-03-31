import React, { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`p-6 flex items-center justify-between ${
        theme === "dark"
          ? "bg-[var(--dark-bg-secondary)] text-[var(--dark-text-primary)]"
          : "bg-[var(--bg-secondary)] text-[var(--text-primary)]"
      }`}
    >
      {/* Welcome Text */}
      <h2 className="font-semibold text-xl md:text-2xl">
        Welcome to{" "}
        <span className="text-[var(--dark-text-accent)]">Stockify</span>,
        <span className="text-lg md:text-xl px-2 font-bold text-[var(--dark-text-accent)]">
          Neetu Rai
        </span>
      </h2>

      {/* Navbar Icons */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <IoIosNotifications className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex justify-center items-center rounded-full">
            1
          </div>
        </div>

        {/* Settings Icon */}
        <IoIosSettings className="w-6 h-6 cursor-pointer hover:scale-110 transition-transform" />

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
        <div className="w-12 h-12 shadow-md rounded-full">
          <img
            src="https://w0.peakpx.com/wallpaper/109/769/HD-wallpaper-anime-profile-monkey-d-luffy-luffy-portrait.jpg"
            className="w-full h-full object-cover rounded-full"
            alt="Profile"
          />
          <span className="text-[12px] font-semibold">Admin</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
