import React, { useState, useContext } from "react";
import useFetchUserData from "../../hooks/authhooks/useFetchUserData";
import ToggleButton from "../../components/common/ToggleButton";
import { ThemeContext } from "../../context/ThemeContext";
import SellStockPage from "./SellStockPage";
import BuyStockPage from "./BuyStockPage";

const BuySellPage = () => {
  const [isToggled, setIsToggled] = useState(false);
  const { data } = useFetchUserData();
  const { theme } = useContext(ThemeContext);

  const handleToggle = () => {
    setIsToggled((prev) => !prev);
  };

  return (
    <div
      className={`rounded-md ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
    >
      <div className="flex justify-between px-10 py-3 items-center ">
        <div className="flex gap-20 items-center">
          <div>
            <h2 className="font-semibold text-[18px]">Client Name</h2>
            <p className="text-gray-400">{data?.name}</p>
          </div>
          <div>
            <h2 className="font-semibold text-[18px]">Client Email</h2>
            <p className="text-gray-400">{data?.email}</p>
          </div>
        </div>

        <div>
          <ToggleButton
            isToggled={isToggled}
            onToggle={handleToggle}
            leftLabel="Buy"
            rightLabel="Sell"
          />
        </div>
      </div>
      <hr
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-gray-200"
        } `}
      ></hr>
      <div className="px-10 py-5">
        <BuyStockPage />
      </div>
    </div>
  );
};

export default BuySellPage;
