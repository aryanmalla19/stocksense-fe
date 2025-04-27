import React from "react";
import { Link } from "react-router-dom";
import WatchlistToggleButton from "./WatchListToggleButton";

const StockListRow = React.memo(
  ({ stock, theme, removeStock, isWatchlist }) => {
    return (
      <div
        className={`grid ${
          isWatchlist ? "grid-cols-22" : "grid-cols-20"
        } rounded-md text-sm p-3 items-center  ${
          theme === "dark"
            ? " text-dark-text hover:bg-gray-700"
            : " hover:bg-gray-100 text-light-text"
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

        {isWatchlist && (
          <div className="col-span-2 flex justify-center">
            <input
              type="checkbox"
              checked={stock.is_watchlist}
              onChange={() => {}}
            />
          </div>
        )}
      </div>
    );
  }
);

export default StockListRow;
