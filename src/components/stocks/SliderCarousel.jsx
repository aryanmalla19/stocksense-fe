import React from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const SliderCarousel = ({ direction }) => {
  return (
    <div className="relative">
      <button className="absolute left-0 top-1/8 -translate-y-1/8 bg-white dark:bg-gray-800 rounded-full p-2 shadow-md z-10">
        {direction === "left" ? <FiChevronLeft className="w-5 h-5" /> : ""}
      </button>
    </div>
  );
};

export default SliderCarousel;
