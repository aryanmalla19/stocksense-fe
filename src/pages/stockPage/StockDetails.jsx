import React from "react";

const StockDetails = ({ theme, stock }) => {
  return (
    <div
      className={`p-4 rounded-md ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
    >
      <div className="flex flex-wrap items-center justify-between gap-y-4">
        <div className="flex items-center w-full sm:w-auto">
          <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full text-lg font-bold bg-blue-400 text-white">
            {stock.company_name?.charAt(0)}
          </div>
          <h1
            className={`text-xl sm:text-2xl font-semibold ${
              theme === "dark" ? "text-dark-text" : "text-red-500"
            }`}
          >
            {stock.company_name} ({stock.symbol})
          </h1>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap justify-start sm:justify-end gap-4 text-sm sm:text-base w-full sm:w-auto">
          <p className="font-semibold">NEPSE</p>
          <p>{stock.current_price}</p>
          <p className="text-green-500">Open: {stock.open_price}</p>
          <p className="text-red-500">Close: {stock.close_price}</p>
        </div>
      </div>

      <div className="mt-2 text-sm sm:text-base">
        <p className="font-semibold ml-15">Sector: {stock.sector}</p>
      </div>
    </div>
  );
};

export default StockDetails;
