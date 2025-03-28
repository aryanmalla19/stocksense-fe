import React, { useContext } from "react";
import StockListTableHeader from "./StockListTableHeader";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";

const StockListTable = () => {
  const { theme } = useContext(ThemeContext);
  // Dummy data array
  const dummyStocks = [
    {
      symbol: "AAPL",
      name: "Apple Inc.",
      price: 189.98,
      volume: 45678900,
      change: 2.34,
      changePercent: 1.25,
      open: 187.5,
      high: 190.25,
      low: 186.75,
      inWatchlist: true,
    },
    {
      symbol: "MSFT",
      name: "Microsoft Corporation",
      price: 420.72,
      volume: 32456700,
      change: -3.15,
      changePercent: -0.74,
      open: 423.5,
      high: 425.8,
      low: 419.2,
      inWatchlist: false,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 152.45,
      volume: 28765400,
      change: 5.62,
      changePercent: 3.83,
      open: 148.2,
      high: 153.75,
      low: 147.8,
      inWatchlist: true,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 178.75,
      volume: 45672300,
      change: 1.22,
      changePercent: 0.69,
      open: 177.8,
      high: 179.9,
      low: 176.45,
      inWatchlist: false,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 172.63,
      volume: 98765400,
      change: -8.91,
      changePercent: -4.91,
      open: 180.2,
      high: 181.5,
      low: 171.8,
      inWatchlist: true,
    },
    {
      symbol: "GOOGL",
      name: "Alphabet Inc.",
      price: 152.45,
      volume: 28765400,
      change: 5.62,
      changePercent: 3.83,
      open: 148.2,
      high: 153.75,
      low: 147.8,
      inWatchlist: true,
    },
    {
      symbol: "AMZN",
      name: "Amazon.com Inc.",
      price: 178.75,
      volume: 45672300,
      change: 1.22,
      changePercent: 0.69,
      open: 177.8,
      high: 179.9,
      low: 176.45,
      inWatchlist: false,
    },
    {
      symbol: "TSLA",
      name: "Tesla Inc.",
      price: 172.63,
      volume: 98765400,
      change: -8.91,
      changePercent: -4.91,
      open: 180.2,
      high: 181.5,
      low: 171.8,
      inWatchlist: true,
    },
  ];

  // Sort handler (you can implement actual sorting logic here)
  const handleSort = (sortBy) => {
    console.log(`Sorting by ${sortBy}`);
    // Implement your sorting logic here
  };

  return (
    <section className="details-container ">
      <StockListTableHeader onSort={handleSort} />

      {/* Table body */}
      <div className="overflow-y-auto h-58 flex-1 scrollbar-hidden ">
        <div className="space-y-2 mt-2">
          {dummyStocks.map((stock, index) => (
            <div
              key={index}
              className={`grid grid-cols-8 gap-8 rounded-md px-4 py-3 items-center text-sm ${
                theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-100"
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

              {/* Watchlist Button */}
              <div className="stockList ml-15">
                <button className="flex items-center text-white bg-green-500 p-2 rounded-md ">
                  View
                </button>
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
          ))}
        </div>
      </div>
    </section>
  );
};

export default StockListTable;
