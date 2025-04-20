import React from "react";

const MarketSummary = ({ theme, stock }) => {
  return (
    <div className=" p-4">
      <div className="mb-6">
        <h2
          className={`font-bold text-lg mb-3 ${
            theme === "dark" ? "" : "text-red-500"
          }`}
        >
          Market Summary
        </h2>
        <div className="grid grid-cols-3 gap-6 text-sm">
          <div className="font-semibold">Share Price</div>
          <div className="font-semibold">Recent Prices</div>
          <div className="font-semibold">Beta</div>

          {/* Rows */}
          <div>Open Price</div>
          <div>{stock.open_price}</div>
          <div>1 Year Price Change</div>

          <div>Close Price</div>
          <div>{stock.close_price}</div>
          <div>180 Day VWAP</div>

          <div>High Price</div>
          <div>{stock.high_price}</div>
          <div>30 Days AV</div>

          <div>Low Price</div>
          <div>{stock.low_price}</div>
          <div>BVPS</div>

          <div>Current Price</div>
          <div>{stock.current_price}</div>
          <div>Recent Dividend</div>
        </div>
      </div>

      <hr className="my-4 border-gray-200" />

      {/* Trading Day Range */}
      <div>
        <h2 className="font-bold text-lg mb-3">Trading Day Range</h2>
        <div className="flex justify-between ">
          <span>Low</span>
          <span className="font-medium text-red-500">{stock.low_price}</span>
        </div>
      </div>
    </div>
  );
};

export default MarketSummary;
