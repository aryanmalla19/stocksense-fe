import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import AddNewStock from "../components/AddNewStock";
import StockListHeader from "../components/StockListHeader";
import StockListTable from "../components/StockListTable";
import StockDetails from "../components/StockDetails";
import Calendar from "../components/Calender";

const WishList = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`  ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text[#4D4D4D]"
      }`}
    >
      <div className="flex justify-center">
        <h2 className=" font-semibold mt-5 flex gap-26">
          <p className="text-3xl">Stock Wishlist</p>
          <Calendar className="text-xl" />
        </h2>
      </div>

      <div className="outlet-container border border-gray-400 rounded-md">
        <div className="flex">
          <AddNewStock />
          <StockDetails />
        </div>

        <main>
          <StockListHeader />
          <StockListTable />
        </main>
      </div>
    </div>
  );
};

export default WishList;
