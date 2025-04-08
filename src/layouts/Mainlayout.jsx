import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import PrivateRoute from "../components/common/PrivateRoute";

const Mainlayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex fixed w-full">
      <PrivateRoute>
        <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <Sidebar />
        </div>
        <div className="bg-[#f7f8fa] flex-1">
          <Navbar />
          <div
            className={`p-6 h-full ${
              theme === "dark"
                ? "bg-[var(--dark-bg-primary)] text-[var(--dark-text-primary)] border-r border-[var(--dark-border-primary)]"
                : "bg-[--bg-secondary)] text-[var(--text-primary)]"
            }`}
          >
            <Outlet />
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default Mainlayout;
