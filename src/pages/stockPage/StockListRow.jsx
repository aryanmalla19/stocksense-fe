// StockListRow.js
import React from "react";
import { useLocation } from "react-router-dom";
import Addwatchlist from "./Addwatchlist";
import Actionlist from "./Actionlist";

const StockListRow = React.memo(({ stock, theme, removeStock }) => {
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

      {isWatchlist ? (
        <Actionlist stockID={stock.id} removeStock={removeStock} />
      ) : (
        <Addwatchlist stockID={stock.id} />
      )}
    </div>
  );
});

export default StockListRow;
