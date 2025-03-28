import React from "react";
import { FaStar, FaEdit, FaTrash } from "react-icons/fa";
import { RiArrowUpDownFill } from "react-icons/ri";

const StockListTableHeader = ({ onSort }) => {
  return (
    <div className="grid grid-cols-8 bg-gray-200 dark:bg-gray-800 text-stone-900 dark:text-white rounded-md px-4 py-2 font-semibold text-center items-center ">
      <div className="stockList ">Symbol</div>

      {/* Name Column with Sort Button */}
      <div className="stockList ">
        <h3>Name</h3>
        <button onClick={() => onSort("name")} className="focus:outline-none">
          <RiArrowUpDownFill className="cursor-pointer hover:text-blue-500" />
        </button>
      </div>

      {/* Price Column with Sort */}
      <div className="stockList">
        <h3>Price</h3>
        <button onClick={() => onSort("price")} className="focus:outline-none">
          <RiArrowUpDownFill className="cursor-pointer hover:text-blue-500" />
        </button>
      </div>

      {/* Volume Column with Sort */}
      <div className="stockList">
        <h3>Volume</h3>
        <button onClick={() => onSort("volume")} className="focus:outline-none">
          <RiArrowUpDownFill className="cursor-pointer hover:text-blue-500" />
        </button>
      </div>

      {/* Change % Column with Sort */}
      <div className="stockList">
        <h3>Change (%)</h3>
        <button onClick={() => onSort("change")} className="focus:outline-none">
          <RiArrowUpDownFill className="cursor-pointer hover:text-blue-500" />
        </button>
      </div>

      {/* Open, High, Low */}
      <div className="flex gap-7">
        <h3>Open</h3>
        <h3>High</h3>
        <h3>Low</h3>
      </div>

      {/* Watchlist Button */}
      <button className="stockList text-yellow-500 hover:text-yellow-700 ml-15 ">
        <FaStar />
        Watchlist
      </button>

      {/* Action Buttons (Edit & Delete) */}
      <div className="stockList ml-15">
        <h3>Action</h3>
      </div>
    </div>
  );
};

export default StockListTableHeader;
