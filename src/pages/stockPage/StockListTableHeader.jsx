import React from "react";
import {
  TbSortAscending2Filled,
  TbSortDescending2Filled,
} from "react-icons/tb";
import { RxCaretSort } from "react-icons/rx";
import { useLocation } from "react-router-dom";

const SortableHeader = ({ label, sortBy, sortOrder, onSort, columnKey }) => {
  const handleSort = () => onSort(columnKey);

  const getIcon = () => {
    if (sortBy === columnKey) {
      if (columnKey === "name" || columnKey === "sector") {
        return sortOrder === "asc" ? (
          <TbSortAscending2Filled className="text-green-500" />
        ) : (
          <TbSortDescending2Filled className="text-red-500" />
        );
      } else {
        // For numeric values: reverse icons
        return sortOrder === "asc" ? (
          <TbSortDescending2Filled className="text-red-500" />
        ) : (
          <TbSortAscending2Filled className="text-green-500" />
        );
      }
    }
    return <RxCaretSort />;
  };

  return (
    <div className="stockList">
      <button
        onClick={handleSort}
        className="flex items-center gap-1 focus:outline-none"
      >
        <h3>{label}</h3>
        {getIcon()}
      </button>
    </div>
  );
};

const StockListTableHeader = ({ sortBy, sortOrder, onSort, theme }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  return (
    <div
      className={`grid grid-cols-20 rounded-md px-4 py-3 font-semibold text-left text-[15px] transition-all drop-shadow-sm  ${
        theme === "dark"
          ? "bg-gray-900 text-dark-text "
          : "bg-white text-light-text"
      }`}
    >
      {/* Symbol (1 column) */}
      <div className="col-span-2 stockList">Symbol</div>

      {/* Company Name (3 columns) */}
      <div className="col-span-4">
        <SortableHeader
          label="Company Name"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="name"
        />
      </div>

      {/* Sector (1 column) */}
      <div className="col-span-2">
        <SortableHeader
          label="Sector"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="sector"
        />
      </div>

      {/* Open Price (1 column) */}
      <div className="col-span-2">
        <SortableHeader
          label="Open Price"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="open"
        />
      </div>

      {/* Close Price (1 column) */}
      <div className="col-span-2">
        <SortableHeader
          label="Close Price"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="close"
        />
      </div>

      {/* High Price (1 column) */}
      <div className="col-span-2">
        <SortableHeader
          label="High Price"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="high"
        />
      </div>

      {/* Low Price (1 column) */}
      <div className="col-span-2  ">
        <SortableHeader
          label="Low Price"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="low"
        />
      </div>

      <div className="col-span-2  ">
        <SortableHeader
          label="Current"
          sortBy={sortBy}
          sortOrder={sortOrder}
          onSort={onSort}
          columnKey="current"
        />
      </div>

      {/* Favourite (1 column) */}
      {isWatchlist ? (
        <div className="col-span-1 stockList ml-4">
          <h3>Action</h3>
        </div>
      ) : (
        <div className="col-span-1 stockList ml-4">
          <h3>Favourites</h3>
        </div>
      )}
    </div>
  );
};

export default StockListTableHeader;
