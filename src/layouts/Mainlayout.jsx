import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import PrivateRoute from "../components/common/PrivateRoute";

const Mainlayout = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="flex ">
      <PrivateRoute>
        <div className="w-[240px] ">
          <Sidebar />
        </div>
        <div
          className={`flex-1  ${
            theme === "dark"
              ? "bg-[#202020] text-white"
              : "bg-[#F3F8FF] text-[#757575] "
          }`}
        >
          <div className="">
            <Navbar theme={theme} />
            <div className="outlet-container ">
              <Outlet theme={theme} />
            </div>
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default Mainlayout;
