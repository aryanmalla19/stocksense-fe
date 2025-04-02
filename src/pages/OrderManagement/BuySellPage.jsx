import React, { useContext } from "react";
import BuysellHeading from "./BuysellHeading";
import { ThemeContext } from "../../context/ThemeContext";

const BuySellPage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      className={`rounded-md ${
        theme === "dark" ? "bg-gray-800 text-white  " : "bg-gray-200 "
      }`}
    >
      <BuysellHeading />
    </div>
  );
};

export default BuySellPage;
