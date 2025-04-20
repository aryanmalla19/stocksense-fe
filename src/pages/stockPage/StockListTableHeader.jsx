import React from "react";
import { useLocation } from "react-router-dom";
import SortTableHeader from "./SortTableHeader";

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
            <th className="col-span-2 text-left">
            <SortTableHeader
                label="Symbol"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="symbol"
              />
            </th>

            <th className="col-span-4 text-left">
              <SortTableHeader
                label="Company Name"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="company_name"
              />
            </th>

            <th className="col-span-2 text-left">
              <SortTableHeader
                label="Sector"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="sector"
              />
            </th>

            <th className="col-span-2 text-left">
              <SortTableHeader
                label="Open Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="open_price"
              />
            </th>

            <th className="col-span-2 text-left">
              <SortTableHeader
                label="Close Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="close_price"
              />
            </th>

            <th className="col-span-2 text-left">
              <SortTableHeader
                label="High Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="high_price"
              />
            </th>

            <th className="col-span-2 text-left">
              <SortTableHeader
                label="Low Price"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="low_price"
              />
            </th>

            <th className="col-span-2 text-left">
              <SortTableHeader
                label="Current"
                sortBy={sortBy}
                sortOrder={sortOrder}
                onSort={onSort}
                columnKey="current_price"
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
