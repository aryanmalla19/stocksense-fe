import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import StockListTableHeader from "./StockListTableHeader";
import Pagination from "./Pagination";
import Addwatchlist from "./Addwatchlist";
import Actionlist from "./Actionlist";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import useStocks from "../../hooks/stockshooks/useStocks";

const StockListRow = React.memo(({ stock, theme }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  return (
    <div
      className={`grid grid-cols-20 rounded-md text-sm ${
        theme === "dark" ? "details-bg-dark" : "details-bg-light"
      }`}
    >
      <div className="col-span-2 font-medium">{stock.symbol}</div>
      <div className="col-span-4">{stock.company_name}</div>
      <div className="col-span-2">{stock.sector}</div>
      <div className="col-span-2">
        ${parseFloat(stock.open_price).toFixed(2)}
      </div>
      <div className="col-span-2">
        ${parseFloat(stock.high_price).toFixed(2)}
      </div>
      <div className="col-span-2">
        ${parseFloat(stock.low_price).toFixed(2)}
      </div>
      <div className="col-span-2">
        ${parseFloat(stock.close_price).toFixed(2)}
      </div>
      <div className="col-span-2">
        ${parseFloat(stock.current_price).toFixed(2)}
      </div>

      {isWatchlist ? <Actionlist /> : <Addwatchlist stockID={stock.id} />}
    </div>
  );
});

const StockListTable = ({ searchSymbol }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  const { fetchWatchList, isLoading, error } = useFetchWatchList();
  const [watchListStocks, setWatchListStocks] = useState([]);

  useEffect(() => {
    if (isWatchlist) {
      fetchWatchList.mutate(undefined, {
        onSuccess: (res) => {
          const stocks = res.data.map((item) => item.stock);
          setWatchListStocks(stocks);
        },
      });
    }
  }, [isWatchlist]);

  // Normal search stocks
  const filteredStocks = useStocks(searchSymbol);

  // Final stocks to display
  const displayStocks = isWatchlist ? watchListStocks : filteredStocks;

  return (
    <section className="details-container">
      <StockListTableHeader />

      <div className="overflow-y-auto h-90 flex-1 scrollbar-hidden">
        <div className="space-y-2 mt-2">
          {displayStocks.length === 0 ? (
            <div className="text-center text-gray-500">No Stock Found</div>
          ) : (
            displayStocks.map((stock, index) => (
              <StockListRow key={index} stock={stock} theme={theme} />
            ))
          )}
        </div>
      </div>

      <Pagination />
    </section>
  );
};

export default StockListTable;
