import React from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Mainlayout = () => {
  return (
    <div className="flex min-h-screen">
      <div className="w-1/3 md:w-1/4 lg:w-1/5 xl:w-1/6">
        <Sidebar />
      </div>
      <div className="bg-[#f7f8fa] flex-1">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Mainlayout;
