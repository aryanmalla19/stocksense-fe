import React, { useContext } from "react";
import { MdLightMode, MdDarkMode } from "react-icons/md";
import { ThemeContext } from "../context/ThemeContext";
import ProfileImage from "../store/ProfileImage";
import { GiHamburgerMenu } from "react-icons/gi";
import useFetchUserData from "../hooks/authhooks/useFetchUserData";
import NotificationPage from "../pages/Navbar/NotificationPage";
import useUserDetails from "../hooks/authhooks/useUserDetails";

const Navbar = ({ theme, collapsed, setCollapsed }) => {
  const {data, refetch, isLoading, error} = useFetchUserData();
  const { toggleTheme } = useContext(ThemeContext);
  const { userDetails } = useUserDetails();
  const detail = userDetails?.data?.[0]?.user;

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
            Stockify, {data?.name}
          </span>
        </h2>
      </div>
      <div className="flex items-center space-x-6">
        {/* Notification Icon */}
        <NotificationPage />

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

        <ProfileImage name={data?.name} email={data?.email} theme={theme} />

      </div>
    </div>
  );
};

export default Navbar;
