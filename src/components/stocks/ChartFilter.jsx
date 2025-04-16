import React from "react";

const ChartFilter = ({ text, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`w-12 h-8  rounded-md flex items-center justify-center cursor-pointer font-bold ${
        active
          ? "bg-[#279a8b] text-black "
          : "border-indigo-300 text-indigo-300"
      } transition duration-200 hover:bg-accent-green hover:text-gray-100 hover:border-[#416863]`}
    >
      {text}
    </button>
  );
};

export default ChartFilter;
