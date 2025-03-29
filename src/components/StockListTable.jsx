import React, { useContext, useState } from "react";
import StockListTableHeader from "./StockListTableHeader";
import { FaEdit, FaTrash } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import useStocks from "../hooks/useStocks";

const StockListTable = ({ searchSymbol }) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const { theme } = useContext(ThemeContext);

  const filteredStocks = useStocks(searchSymbol, sortBy, sortOrder);

  // Toggle sorting order
  const handleSort = (key) => {
    setSortBy(key);
    setSortOrder((prevOrder) => (prevOrder === "asc" ? "desc" : "asc"));
  };

  return (
    <section className="details-container">
      <StockListTableHeader
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />

      {/* Table body */}
      <div className="overflow-y-auto h-58 flex-1 scrollbar-hidden">
        <div className="space-y-2 mt-2">
          {/* Check if no stocks are found */}
          {filteredStocks.length === 0 ? (
            <div className="text-center text-gray-500">No Stock Found</div>
          ) : (
            filteredStocks.map((stock, index) => (
              <div
                key={index}
                className={`grid grid-cols-7 gap-8 rounded-md px-4 py-3 items-center text-sm ${
                  theme === "dark"
                    ? "bg-gray-800 text-white hover:bg-gray-700"
                    : "bg-gray-100 hover:bg-gray-50"
                }`}
              >
                {/* Symbol */}
                <div className="font-medium stockList">{stock.symbol}</div>

                {/* Name */}
                <div className="stockList">{stock.name}</div>

                {/* Price */}
                <div className="stockList">${stock.price.toFixed(2)}</div>

                {/* Volume */}
                <div className="stockList">
                  {(stock.volume / 1000000).toFixed(1)}M
                </div>

                {/* Change % */}
                <div
                  className={`stockList ${
                    stock.change >= 0
                      ? "text-green-600 dark:text-green-400"
                      : "text-red-600 dark:text-red-400"
                  }`}
                >
                  {stock.change >= 0 ? "+" : ""}
                  {stock.change.toFixed(2)} ({stock.changePercent.toFixed(2)}%)
                </div>

                {/* Open, High, Low */}
                <div className="flex justify-center gap-4">
                  <span>${stock.open.toFixed(2)}</span>
                  <span>${stock.high.toFixed(2)}</span>
                  <span>${stock.low.toFixed(2)}</span>
                </div>

                {/* Action Buttons */}
                <div className="stockList ml-10">
                  <button className="text-blue-500 hover:text-blue-700">
                    <FaEdit />
                  </button>
                  <button className="text-red-500 hover:text-red-700">
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StockListTable;
