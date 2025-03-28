import React, { useContext } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={`p-6 flex items-center justify-between ${
        theme === "dark"
          ? "bg-gray-800 text-white "
          : "bg-gray-200 text-gray-600"
      }`}
    >
      {/* Welcome Text */}
      <h2 className="font-semibold text-xl md:text-2xl">
        Welcome to <span className="text-purple-500">Stockify</span>,
        <span className="text-lg md:text-xl px-2 font-bold text-purple-500">
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
            <FaSun className="w-6 h-6 text-yellow-400" />
          ) : (
            <FaMoon className="w-5 h-5 text-gray-700" />
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
