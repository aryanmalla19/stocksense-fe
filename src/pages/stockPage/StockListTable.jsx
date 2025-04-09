import React, { useContext, useState } from "react";
import StockListTableHeader from "./StockListTableHeader";
import { ThemeContext } from "../../context/ThemeContext";
import useStocks from "../../hooks/stockshooks/useStocks";

const StockListRow = React.memo(({ stock, theme }) => {
  return (
    <div
      className={`grid grid-cols-8 rounded-md px-4 py-3 items-center text-sm ${
        theme === "dark" ? "details-bg-dark " : "details-bg-light"
      }`}
    >
      {/* Symbol */}
      <div className="font-medium stockList">{stock.symbol}</div>

      {/* Name */}
      <div className="stockList">{stock.name}</div>

      <div className="stockList">{stock.sector}</div>

      {/* Price */}
      <div className="stockList">${stock.open.toFixed(2)}</div>
      <div className="stockList">${stock.price.toFixed(2)}</div>
      <div className="stockList">${stock.high.toFixed(2)}</div>
      <div className="stockList">${stock.low.toFixed(2)}</div>

      {/* Action Buttons */}
      <div className="stockList justify-center ml-10">+</div>
    </div>
  );
});

const StockListTable = ({ searchSymbol }) => {
  const [sortBy, setSortBy] = useState("name");
  const [sortOrder, setSortOrder] = useState("asc");

  const { theme } = useContext(ThemeContext);

  const filteredStocks = useStocks(searchSymbol, sortBy, sortOrder);

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

      <div className="overflow-y-auto h-110 flex-1 scrollbar-hidden">
        <div className="space-y-2 mt-2">
          {filteredStocks.length === 0 ? (
            <div className="text-center text-gray-500">No Stock Found</div>
          ) : (
            filteredStocks.map((stock, index) => (
              <StockListRow key={index} stock={stock} theme={theme} />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default StockListTable;
