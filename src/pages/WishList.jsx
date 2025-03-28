import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import StockChart from "../components/StockChart";
import AddNewStock from "../components/AddNewStock";
import StockListHeader from "../components/StockListHeader";
import StockListTable from "../components/StockListTable";

const WishList = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`  ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text[#4D4D4D]"
      }`}
    >
      <div className="flex justify-center">
        <h2 className="text-3xl font-semibold mt-5">Stock Wishlist</h2>
        {/* <Calender /> */}
      </div>

      <div className="outlet-container border border-gray-400 rounded-md">
        <div className="bg-gray-100 rounded-md p-3 text-black">
          Stock Details
        </div>
        <StockChart />
        <AddNewStock />

        <main>
          <StockListHeader />
          <StockListTable />
        </main>
      </div>
    </div>
  );
};

export default WishList;
