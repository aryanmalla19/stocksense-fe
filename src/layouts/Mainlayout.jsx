import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import PrivateRoute from "../components/common/PrivateRoute";

const Mainlayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex">
      <PrivateRoute>
        <div className="w-1/2 md:w-1/4 lg:w-1/5 xl:w-1/6">
          <Sidebar />
        </div>
        <div
          className={`flex-1  ${
            theme === "dark"
              ? "bg-[#202020] text-white"
              : "bg-[#F3F8FF] text-[#757575] "
          }`}
        >
          <Navbar />
          <div className="p-6 h-full ">
            <Outlet />
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default Mainlayout;
