import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Passwordhidded = ({ isVisible, toggleVisibility }) => {
  return (
    <button
      type="button"
      className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
      onClick={toggleVisibility}
    >
      {isVisible ? <FaEye /> : <FaEyeSlash />}
    </button>
  );
};

export default Passwordhidded;
