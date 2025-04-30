import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoIosSettings } from "react-icons/io";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { ThemeContext } from "../../../context/ThemeContext";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleNavigation = (path) => {
    setIsOpen(false);
    navigate(path);
  };

  return (
    <>
      {/* Profile Image */}
      <div>
        <div className="w-8 h-8 cursor-pointer shadow-md rounded-full">
          <img
            src="https://w0.peakpx.com/wallpaper/109/769/HD-wallpaper-anime-profile-monkey-d-luffy-luffy-portrait.jpg"
            className="w-full h-full object-cover rounded-full"
            onClick={handleToggle}
            alt="Profile"
          />
        </div>

        {isOpen && (
          <div
            className={`absolute w-52 rounded-lg border mt-2 right-[20px] flex flex-col ${
              theme === "dark"
                ? "bg-[var(--dark-bg-primary)] border-gray-700"
                : "bg-[var(--bg-primary)] border-gray-300 shadow-2xl"
            }`}
          >
            {/* User Info */}
            <div
              className={`border-b p-2 ${
                theme === "light" ? "border-gray-300" : "border-gray-700"
              }`}
            >
              <h1 className="font-semibold">John Doe</h1>
              <p className="text-sm">john@example.com</p>
            </div>

            {/* Profile & Settings Navigation */}
            <div className="flex p-2 flex-col">
              <div
                onClick={() => handleNavigation("/profile")}
                className="flex items-center py-1 cursor-pointer"
              >
                <FaRegUser />
                <p className="ml-3">Profile</p>
              </div>

              <div
                onClick={() => handleNavigation("/settings")}
                className="flex items-center py-1 cursor-pointer"
              >
                <IoIosSettings />
                <p className="ml-3">Settings</p>
              </div>
            </div>

            {/* Logout */}
            <div
              onClick={() => handleNavigation("/logout")}
              className={`flex border-t p-2 cursor-pointer items-center ${
                theme === "light" ? "border-gray-300" : "border-gray-700"
              }`}
            >
              <FaSignOutAlt />
              <p className="ml-3">Logout</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default UserProfile;
