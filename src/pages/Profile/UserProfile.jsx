import React, { useContext, useState } from "react";
import { IoIosSettings } from "react-icons/io";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const UserProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme } = useContext(ThemeContext);
  const handleToggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
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
        {isOpen && (
          <div
            className={`absolute w-52 rounded-lg ${
              theme === "dark"
                ? "bg-[var(--dark-bg-primary)] border-gray-700 "
                : "bg-[var(--bg-primary)] border-gray-300 shadow-2xl"
            } border mt-2 right-[20px] flex flex-col`}
          >
            <div
              className={`border-b p-2 ${
                theme === "light" ? "border-gray-300" : "border-gray-700 "
              }`}
            >
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
            <div
              className={`flex border-t p-2 cursor-pointer  ${
                theme === "light" ? "border-gray-300" : "border-gray-700"
              } items-center`}
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
