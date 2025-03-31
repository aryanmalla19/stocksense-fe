import React, { useContext, useState } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import { FaRegUser } from "react-icons/fa";
import { FaSignOutAlt } from 'react-icons/fa';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div
      className={`px-6 py-4 flex items-center justify-between ${theme === "dark"
        ? "bg-[var(--dark-bg-secondary)] text-[var(--dark-text-primary)]"
        : "bg-[var(--bg-secondary)] text-[var(--text-primary)]"
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
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-5 h-5 flex justify-center items-center rounded-full">
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
        <div>
          <div className="w-8 cursor-pointer h-8 shadow-md rounded-full">
            <img
              src="https://w0.peakpx.com/wallpaper/109/769/HD-wallpaper-anime-profile-monkey-d-luffy-luffy-portrait.jpg"
              className="w-full h-full object-cover rounded-full"
              onClick={handleToggle}
              alt="Profile"
            />
          </div>
          {
            isOpen && (
              <div className={`absolute w-52 rounded-lg ${theme === 'dark' ? 'bg-[var(--dark-bg-primary)] border-gray-700 ': 'bg-[var(--bg-primary)] border-gray-300 shadow-2xl' } border mt-2 right-[20px] flex flex-col`}>
                <div className={`border-b p-2 ${theme === 'light' ? 'border-gray-300':'border-gray-700 '}`}>
                  <h1 className="font-semibold">John Doe</h1>
                  <p className="text-sm">john@example.com</p>
                </div>
                <div className="flex p-2 flex-col">
                  <div className="flex items-center py-1 cursor-pointer">
                    <FaRegUser />
                    <p className="ml-3">Profile</p>
                  </div>
                  <div className="flex items-center py-1 cursor-pointer">
                    <IoIosSettings />
                    <p className="ml-3">Settings</p>
                  </div>
                </div>
                <div className={`flex border-t p-2 cursor-pointer  ${theme === 'light' ? 'border-gray-300':'border-gray-700'} items-center`}>
                  <FaSignOutAlt />
                  <p className="ml-3">Logout</p>
                </div>
              </div>
            )
          }

        </div>
      </div>
    </div>
  );
};

export default Navbar;
