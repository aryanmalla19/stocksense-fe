import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import PrivateRoute from "../components/common/PrivateRoute";

const Mainlayout = () => {
  const { theme } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex">
      <PrivateRoute>
        <div
          className={`${
            collapsed ? "w-[100px]" : "w-[260px]"
          } transition-all duration-300`}
        >
          <Sidebar collapsed={collapsed} theme={theme} />
        </div>
        <div
          className={`flex-1 ${
            theme === "dark"
              ? "bg-[#202020] text-white"
              : "bg-[#F3F8FF] text-[#757575]"
          }`}
        >
          <Navbar
            theme={theme}
            collapsed={collapsed}
            setCollapsed={setCollapsed}
          />
          <div className="outlet-container">
            <Outlet />
          </div>
        </div>
      </PrivateRoute>
    </div>
  );
};

export default Mainlayout;
