import React, { useContext } from "react";
import {
  FaSortAlphaDown,
  FaSortAlphaUp,
  FaSortNumericDown,
  FaSortNumericUp,
  FaSort,
} from "react-icons/fa";
import { ThemeContext } from "../../context/ThemeContext";

const SortableHeader = ({ label, sortBy, sortOrder, onSort, columnKey }) => {
  const handleSort = () => onSort(columnKey);

  const getIcon = () => {
    if (sortBy === columnKey) {
      if (sortOrder === "asc") {
        return columnKey === "name" ? (
          <FaSortAlphaDown className="text-[var(--dark-text-accent)]" />
        ) : (
          <FaSortNumericDown className="text-[var(--dark-text-accent)]" />
        );
      } else {
        return columnKey === "name" ? (
          <FaSortAlphaUp className="text-[var(--text-accent)]" />
        ) : (
          <FaSortNumericUp className="text-[var(--text-accent)]" />
        );
      }
    }
    return (
      <FaSort className="text-[var(--text-primary)] dark:text-[var(--dark-text-primary)]" />
    );
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
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`grid grid-cols-7 rounded-md px-4 py-2 font-semibold text-center items-center ${
        theme === "dark"
          ? "bg-[var(--dark-bg-secondary)] text-[var(--dark-text-primary)]"
          : "bg-[var(--bg-secondary)] text-[var(--text-primary)]"
      }`}
    >
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
      <div className="stockList ml-15">
        <h3>Action</h3>
      </div>
    </div>
  );
};

export default StockListTableHeader;
