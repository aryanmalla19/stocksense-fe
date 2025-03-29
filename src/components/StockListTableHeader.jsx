import React from "react";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
  FaSort,
} from "react-icons/fa";

const StockListTableHeader = ({ sortBy, sortOrder, onSort }) => {
  return (
    <div className="grid grid-cols-7 bg-gray-200 dark:bg-gray-800 text-stone-900 dark:text-white rounded-md px-4 py-2 font-semibold text-center items-center">
      <div className="stockList">Symbol</div>

      {/* Name Sorting */}
      <div className="stockList">
        <button
          onClick={() => onSort("name")}
          className="flex items-center gap-1 focus:outline-none"
        >
          <h3>Name</h3>
          {sortBy === "name" ? (
            sortOrder === "asc" ? (
              <FaSortAlphaUp className="text-green-500" />
            ) : (
              <FaSortAlphaDown className="text-red-500" />
            )
          ) : (
            <FaSort />
          )}
        </button>
      </div>

      {/* Price Sorting */}
      <div className="stockList">
        <button
          onClick={() => onSort("price")}
          className="flex items-center gap-1 focus:outline-none"
        >
          <h3>Price</h3>
          {sortBy === "price" ? (
            sortOrder === "asc" ? (
              <FaSortNumericDown className="text-red-500" />
            ) : (
              <FaSortNumericUp className="text-green-500" />
            )
          ) : (
            <FaSort />
          )}
        </button>
      </div>

      {/* Volume Sorting */}
      <div className="stockList">
        <button
          onClick={() => onSort("volume")}
          className="flex items-center gap-1 focus:outline-none"
        >
          <h3>Volume</h3>
          {sortBy === "volume" ? (
            sortOrder === "asc" ? (
              <FaSortNumericDown className="text-red-500" />
            ) : (
              <FaSortNumericUp className="text-green-500" />
            )
          ) : (
            <FaSort />
          )}
        </button>
      </div>

      {/* Change % Sorting */}
      <div className="stockList">
        <button
          onClick={() => onSort("change")}
          className="flex items-center gap-1 focus:outline-none"
        >
          <h3>Change (%)</h3>
          {sortBy === "change" ? (
            sortOrder === "asc" ? (
              <FaSortNumericDown className="text-red-500" />
            ) : (
              <FaSortNumericUp className="text-green-500" />
            )
          ) : (
            <FaSort />
          )}
        </button>
      </div>

      {/* Open, High, Low */}
      <div className="flex gap-7">
        <h3>Open</h3>
        <h3>High</h3>
        <h3>Low</h3>
      </div>

      {/* Action Column */}
      <div className="stockList ml-15">
        <h3>Action</h3>
      </div>
    </div>
  );
};

export default StockListTableHeader;
