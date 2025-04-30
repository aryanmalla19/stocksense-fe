import React from "react";
import { FiChevronLeft } from "react-icons/fi";

const SliderCarousel = ({ direction, theme }) => {
  return (
    <div className="relative">
      <button
        className={`absolute left-0 top-1/2 -translate-y-1/2 z-10 
          p-2 rounded-full shadow-md 
          ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
      >
        {direction === "left" ? <FiChevronLeft className="w-5 h-5" /> : null}
      </button>
    </div>
  );
};

export default SliderCarousel;
