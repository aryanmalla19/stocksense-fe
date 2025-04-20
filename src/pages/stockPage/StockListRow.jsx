import React from "react";
import { Link } from "react-router-dom";
import WatchlistToggleButton from "./WatchListToggleButton";

const StockListRow = React.memo(({ stock, theme, removeStock }) => {
  return (
    <div
      className={`grid grid-cols-20 rounded-md text-sm p-3 items-center ${
        theme === "dark" ? " hover:bg-gray-700" : " hover:bg-gray-100"
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

      <WatchlistToggleButton
        stockID={stock.id}
        initialIsWatchlist={stock.is_watchlist}
        removeStock={removeStock}
      />
    </div>
  );
});

export default StockListRow;
