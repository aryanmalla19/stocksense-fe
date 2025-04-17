import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import StockListTable from "./StockListTable";
import SearchStock from "./SearchStock";
import Calendar from "../../components/stocks/Calender";
import { useLocation } from "react-router-dom";
import useSearchStock from "../../hooks/stockshooks/useSearchStock";

const StockList = () => {
  const [searchSymbol, setSearchSymbol] = useState("");
  const { theme } = useContext(ThemeContext);
  const location = useLocation();

  const isWatchlist = location.pathname.includes("watch-list");

  const {
    data: stocks = [],
    isLoading,
    isError,
  } = useSearchStock(searchSymbol);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">
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

        <SearchStock
          theme={theme}
          searchSymbol={searchSymbol}
          setSearchSymbol={setSearchSymbol}
        />

        <Calendar />
      </div>

      <div
        className={`outlet-container rounded-md p-4 ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <main>
          {isLoading && <p>Loading stocks...</p>}
          {isError && <p>Error fetching stocks.</p>}

          <StockListTable
            searchSymbol={searchSymbol}
            stocks={stocks}
            theme={theme}
          />
        </main>
      </div>
    </div>
  );
};

export default StockList;
