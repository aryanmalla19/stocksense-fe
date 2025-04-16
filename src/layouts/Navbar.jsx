import React, { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";
import { ThemeContext } from "../context/ThemeContext";
import ProfileImage from "../store/ProfileImage";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = ({ theme, collapsed, setCollapsed }) => {
  const { toggleTheme } = useContext(ThemeContext);

  return (
    <div className="px-6 py-7 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <button
          className="text-2xl cursor-pointer"
          onClick={() => setCollapsed(!collapsed)}
        >
          <GiHamburgerMenu />
        </button>
        <h2 className="font-semibold md:text-lg">
          Welcome to
          <span className="text-[var(--dark-text-accent)] pl-2">
            Stockify, Neetu Rai
          </span>
        </h2>
      </div>
      {/* Navbar Icons */}
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <div className="relative cursor-pointer hover:scale-110 transition-transform">
          <IoIosNotifications className="w-6 h-6" />
          <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex justify-center items-center rounded-full">
            1
          </div>
        </div>

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

        <ProfileImage theme={theme} />
      </div>
    </div>
  );
};

export default Navbar;
