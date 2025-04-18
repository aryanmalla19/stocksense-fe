import React from "react";
import { useLocation } from "react-router-dom";
import SorTableHeader from "./SortTableHeader";

const StockListTableHeader = ({ sortBy, sortOrder, onSort, theme }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  return (
    <div className="overflow-x-auto w-full">
      <table className="min-w-[900px] w-full">
        <thead>
          <tr
            className={`grid grid-cols-20 rounded-md px-4 py-3 font-semibold text-left text-[15px] transition-all drop-shadow-sm ${
              theme === "dark"
                ? "bg-gray-900 text-dark-text"
                : "bg-white text-light-text"
            }`}
          >
            <th className="col-span-2 text-left">Symbol</th>

            <th className="col-span-4 text-left">
              <SorTableHeader
                label="Company Name"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="name"
              />
            </th>

            <th className="col-span-2 text-left">
              <SorTableHeader
                label="Sector"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="sector"
              />
            </th>

            <th className="col-span-2 text-left">
              <SorTableHeader
                label="Open Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="open"
              />
            </th>

            <th className="col-span-2 text-left">
              <SorTableHeader
                label="Close Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="close"
              />
            </th>

            <th className="col-span-2 text-left">
              <SorTableHeader
                label="High Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="high"
              />
            </th>

            <th className="col-span-2 text-left">
              <SorTableHeader
                label="Low Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="low"
              />
            </th>

            <th className="col-span-2 text-left">
              <SorTableHeader
                label="Current"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="current"
              />
            </th>

            <th className="col-span-1 text-left ml-4">
              <h3>{isWatchlist ? "Action" : "Favourites"}</h3>
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default StockListTableHeader;
