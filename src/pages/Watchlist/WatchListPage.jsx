import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import AddNewStock from "../../components/AddNewStock";
import StockListTable from "../../components/StockListTable";
import StockDetails from "../../components/StockDetails";
import Calendar from "../../components/Calender";
import SearchStock from "../../components/SearchStock";

const WatchListPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text[#4D4D4D]"
      }`}
    >
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">
            Stock Watchlist
          </h1>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
            Track your favorite stocks
          </p>
        </div>

        {/* Search Stock using Symbol */}
        <SearchStock />

        {/* current date */}
        <Calendar />
      </div>
      <div className="outlet-container border border-gray-400 rounded-md">
        <div className="flex flex-col md:flex-row gap-4 h-65">
          <div>
            <AddNewStock />
          </div>
          <div>
            <StockDetails />
          </div>
        </div>

        <main>
          <StockListTable />
        </main>
      </div>
    </div>
  );
};

export default WatchListPage;
