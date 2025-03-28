import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchStock = () => {
  return (
    <div>
      <div className="relative w-100">
        <input
          type="text"
          placeholder="Search Symbol..."
          className="p-2 w-full pl-10 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-300" />
      </div>
    </div>
  );
};

export default SearchStock;
