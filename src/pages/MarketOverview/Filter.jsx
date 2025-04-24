// Filter.jsx
import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";

const items = [
  { label: "Open Price", key: "open_price" },
  { label: "Close Price", key: "close_price" },
  { label: "High Price", key: "high_price" },
  { label: "Low Price", key: "low_price" },
  { label: "Current Price", key: "current_price" },
];

const Filter = ({ theme, onSelect }) => {
  const [isOpened, setIsOpened] = useState(false);

  const handleClick = () => {
    setIsOpened(!isOpened);
  };

  return (
    <div className="relative text-right font-semibold">
      <button
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-4 py-2 text-white rounded-md shadow transition duration-200 ease-in-out hover:opacity-90 bg-[#9E15BF]"
      >
        <FiFilter className="text-lg" />
        Type
      </button>

      {isOpened && (
        <div
          className={`absolute right-0 mt-2 w-48 rounded-xl z-20 shadow-lg overflow-hidden transition-all duration-200 text-center ${
            theme === "dark"
              ? "bg-dark-bg text-dark-text"
              : "bg-light-bg text-light-text"
          }`}
        >
          <div
            className={`px-4 py-2 text-sm font-medium border-b text-center ${
              theme === "dark" ? "border-b-gray-500" : "border-b-white"
            }`}
          >
            Filter using Price
          </div>
          <ul className="flex flex-col">
            {items.map((item, index) => (
              <li
                key={index}
                onClick={() => {
                  onSelect(item.key);
                  setIsOpened(false);
                }}
                className={`px-4 py-3 text-sm cursor-pointer transition duration-150 rounded-md mx-3 ${
                  theme === "dark" ? "hover:bg-button-bg" : "hover:bg-gray-200"
                }`}
              >
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Filter;
