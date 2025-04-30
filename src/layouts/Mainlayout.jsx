import React, { useContext, useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";
import PrivateRoute from "../components/Common/PrivateRoute";

const Mainlayout = () => {
  const { theme } = useContext(ThemeContext);
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="h-screen flex overflow-hidden">
      <PrivateRoute>
        <div
          className={`sticky top-0 h-screen transition-all duration-300 border-r z-30 ${
            collapsed ? "w-[100px]" : "w-2/12"
          } ${
            theme === "dark"
              ? "border-r-gray-600 bg-black"
              : "border-r-gray-200 bg-white"
          }`}
        >
          <Sidebar collapsed={collapsed} theme={theme} />
        </div>

        <div className="flex-1 flex flex-col">
          <div
            className={`sticky top-0 z-20 ${
              theme === "dark"
                ? "bg-[#000000] text-white"
                : "bg-[#F3F8FF] text-[#757575]"
            }`}
          >
            <Navbar
              theme={theme}
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </div>

          <div
            className={`flex-1 overflow-auto ${
              theme === "dark"
                ? "bg-[#000000] text-white"
                : "bg-light-bg text-[#757575]"
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
