import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 m-2 h-8 border-1 rounded-md flex items-center justify-center cursor-pointer ${
        active
          ? "bg-[#14c2ab] text-gray-100"
          : "border-indigo-300 text-indigo-300"
      } transition duration-200 hover:bg-[#14c2ab] hover:text-gray-100 hover:border-[#14c2ab]`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
