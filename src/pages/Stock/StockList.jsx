import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import StockListTable from "./StockListTable";
import SearchStock from "./SearchStock";
import Calendar from "../../components/Stocks/Calender";
import { useLocation } from "react-router-dom";

const StockList = () => {
  const [searchSymbol, setSearchSymbol] = useState("");
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const isWatchlist = location.pathname.includes("watch-list");

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 ">
        <div>
          <h1 className="text-xl md:text-2xl font-bold py-2">
            {isWatchlist ? "Stock Watch List" : "Stock List"}
          </h1>
          <p
            className={`text-sm mt-1 ${
              theme === "dark" ? "text-dark-text" : "text-light-text"
            }`}
          >
            Track your favorite stocks
          </p>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-4 sm:mt-0">
          <SearchStock
            theme={theme}
            searchSymbol={searchSymbol}
            setSearchSymbol={setSearchSymbol}
          />
          <Calendar />
        </div>
      </div>

      {/* Main Content */}
      <div
        className={`outlet-container  rounded-md p-4 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <main>
          <StockListTable searchSymbol={searchSymbol} theme={theme} />
        </main>
      </div>
    </div>
  );
};

export default StockList;
