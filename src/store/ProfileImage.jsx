import React, { useState, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const ProfileImage = () => {
  const { theme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="relative">
      <div className="w-8 h-8 cursor-pointer shadow-md rounded-full">
        <img
          src="https://w0.peakpx.com/wallpaper/109/769/HD-wallpaper-anime-profile-monkey-d-luffy-luffy-portrait.jpg"
          className="w-full h-full object-cover outline-2 rounded-full"
          onClick={handleToggle}
          alt="Profile"
        />
      </div>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={handleClose} />

          <div
            className={`absolute w-52 rounded-lg z-20 ${
              theme === "dark"
                ? "bg-[var(--dark-bg-primary)] border-gray-700"
                : "bg-gray-100 border-gray-200 shadow-2xl"
            } border mt-2 right-0 flex flex-col`}
          >
            <div
              className={`border-b p-2 ${
                theme === "light" ? "border-gray-300" : "border-gray-700"
              }`}
            >
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm">john@example.com</p>
            </div>
            <div className="flex p-2 flex-col">
              <Link to="/profile">
                <div className="flex items-center py-1 cursor-pointer">
                  <FaRegUser />
                  <p className="ml-3">Profile</p>
                </div>
              </Link>
              <div className="flex items-center py-1 cursor-pointer">
                <Link to="/settings">
                  <div className="flex items-center py-1 cursor-pointer">
                    <IoIosSettings />
                    <p className="ml-3">Settings</p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={`flex border-t p-2 cursor-pointer ${
                theme === "light" ? "border-gray-300" : "border-gray-700"
              } items-center`}
              onClick={handleLogout}
            >
              <FaSignOutAlt />
              <p className="ml-3">Logout</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileImage;
