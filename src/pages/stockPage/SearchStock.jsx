import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchStock = ({ searchSymbol, setSearchSymbol, theme }) => {
  console.log(searchSymbol);
  return (
    <div>
      <div className="relative w-100">
        <input
          type="text"
          placeholder="Search Symbol..."
          value={searchSymbol}
          onChange={(e) => setSearchSymbol(e.target.value)}
          className={`p-2 w-full pl-10 rounded-full focus:outline-none shadow-sm ${
            theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black"
          }`}
        />
        <FaSearch className="absolute left-3 top-3 text-gray-500 dark:text-gray-300" />
      </div>
    </div>
  );
};

export default SearchStock;
