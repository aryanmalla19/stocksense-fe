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
        return columnKey === "company_name" ? (
          <FaSortAlphaDown className="text-red-500" />
        ) : (
          <FaSortNumericDown className="text-red-500" />
        );
      } else {
        return columnKey === "company_name" ? (
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
    <div className="grid grid-cols-8 bg-gray-200 dark:bg-gray-800 text-stone-900 dark:text-white rounded-md px-4 py-2 font-semibold text-center items-center">
      {/* Symbol (No sorting) */}
      <div className="stockList">Symbol</div>

      {/* Company Name */}
      <SortableHeader
        label="Company Name"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="company_name"
      />

      {/* Sector Name */}
      <SortableHeader
        label="Sector"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="sector"
      />

      {/* Close Price */}
      <SortableHeader
        label="Open Price"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="open_price"
      />

      <SortableHeader
        label="Close Price"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="close"
      />

      <SortableHeader
        label="High Price"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="high_price"
      />

      <SortableHeader
        label="low Price"
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={onSort}
        columnKey="low_price"
      />

      {/* Action Column */}
      <div className="stockList ml-15">
        <h3>Favourite</h3>
      </div>
    </div>
  );
};

export default StockListTableHeader;
