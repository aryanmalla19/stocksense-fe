import React from "react";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
  FaSort,
} from "react-icons/fa";

const SortableHeader = ({ label, sortBy, sortOrder, onSort, columnKey }) => {
  const handleSort = () => onSort(columnKey);

  const getIcon = () => {
    if (sortBy === columnKey) {
      if (sortOrder === "asc") {
        return columnKey === "name" ? (
          <FaSortAlphaDown className="text-red-500" />
        ) : (
          <FaSortNumericDown className="text-red-500" />
        );
      } else {
        return columnKey === "name" ? (
          <FaSortAlphaUp className="text-green-500" />
        ) : (
          <FaSortNumericUp className="text-green-500" />
        );
      }
    }
    return <FaSort />;
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

const StockListTableHeader = ({ sortBy, sortOrder, onSort }) => {
  return (
    <div className="grid grid-cols-6 bg-gray-200 dark:bg-gray-800 text-stone-900 dark:text-white rounded-md px-4 py-2 font-semibold text-center items-center">
      <div className="stockList">Symbol</div>

      {/* Name Sorting */}
      <SortableHeader
        label="Name"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="name"
      />

      {/* Price Sorting */}
      <SortableHeader
        label="Price"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="price"
      />

      {/* Volume Sorting */}
      <SortableHeader
        label="Volume"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="volume"
      />

      {/* Change % Sorting */}
      <SortableHeader
        label="Change (%)"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="change"
      />

      {/* Open, High, Low */}
      <div className="flex gap-7">
        <h3>Open</h3>
        <h3>High</h3>
        <h3>Low</h3>
      </div>

      {/* Action Column */}
      {/* <div className="stockList ml-15">
        <h3>Action</h3>
      </div> */}
    </div>
  );
};

export default StockListTableHeader;
