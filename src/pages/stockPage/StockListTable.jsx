import React, { useContext, useState } from "react";
import StockListTableHeader from "./StockListTableHeader";
import { ThemeContext } from "../../context/ThemeContext";
import useStocks from "../../hooks/stockshooks/useStocks";
import Pagination from "./Pagination";
import Addwatchlist from "./Addwatchlist";

const StockListRow = React.memo(({ stock, theme }) => {
  return (
    <div
      className={`grid grid-cols-18 rounded-md  text-sm ${
        theme === "dark" ? "details-bg-dark" : "details-bg-light"
      }`}
    >
      {/* Symbol (1 column) */}
      <div className="col-span-2 font-medium ">{stock.symbol}</div>

      {/* Company Name (3 columns) */}
      <div className="col-span-4 ">{stock.name}</div>

      {/* Sector (1 column) */}
      <div className="col-span-2 ">{stock.sector}</div>

      {/* Open Price (1 column) */}
      <div className="col-span-2 ">${stock.open.toFixed(2)}</div>

      {/* Close Price (1 column) */}
      <div className="col-span-2 ">${stock.price.toFixed(2)}</div>

      {/* High Price (1 column) */}
      <div className="col-span-2 ">${stock.high.toFixed(2)}</div>

      {/* Low Price (1 column) */}
      <div className="col-span-2 ">${stock.low.toFixed(2)}</div>

      {/* Action Buttons (1 column) */}
      <Addwatchlist stockID={stock.id} />
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

      <div className="overflow-y-auto h-90 flex-1 scrollbar-hidden">
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

      <Pagination />
    </section>
  );
};

export default StockListTable;
