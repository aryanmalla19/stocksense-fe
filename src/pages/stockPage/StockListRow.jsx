// StockListRow.js
import React from "react";
import { Link, useLocation } from "react-router-dom";
import Addwatchlist from "./Addwatchlist";
import Actionlist from "./Actionlist";

const StockListRow = React.memo(({ stock, theme, removeStock }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  return (
    <div
      className={`grid grid-cols-20 rounded-md text-sm p-3 items-center ${
        theme === "dark"
          ? "bg-gray-800 text-dark-text hover:bg-gray-700"
          : "bg-gray-100 text-light-text hover:bg-gray-200"
      }`}
    >
      <Link to={`/stocksID/${stock.id}`} className="contents">
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
      </Link>

      {isWatchlist ? (
        <Actionlist stockID={stock.id} removeStock={removeStock} />
      ) : (
        <Addwatchlist stockID={stock.id} />
      )}
    </div>
  );
});

export default StockListRow;
