import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import StockListTable from "../../components/stocks/StockListTable";
import Calendar from "../../components/stocks/Calender";
import SearchStock from "../../components/stocks/SearchStock";
import AddNewStock from "../../components/stocks/AddNewStock";

const WatchListPage = () => {
  const [searchSymbol, setSearchSymbol] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-[#4D4D4D]"
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
        <SearchStock
          searchSymbol={searchSymbol}
          setSearchSymbol={setSearchSymbol}
        />

        {/* Current date */}
        <Calendar />
      </div>

      {/* Main Content */}
      <div className="outlet-container border border-gray-400 rounded-md">
        <div className="flex flex-col md:flex-row gap-4 h-65">
          <AddNewStock />
          <div>sdfd</div>
        </div>

        <main>
          <StockListTable
            searchSymbol={searchSymbol}
            setSearchSymbol={setSearchSymbol}
          />
        </main>
      </div>
    </div>
  );
};

export default WatchListPage;
