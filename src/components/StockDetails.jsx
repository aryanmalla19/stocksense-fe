import React, { useState, useEffect } from "react";
import Calendar from "../components/Calender";
import useTradingViewWidget from "../hooks/useTradingViewWidget";

const StockDetails = () => {
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");

  useTradingViewWidget({ symbol });

  // Example: Update symbol dynamically after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setSymbol("NASDAQ:GOOGL");
    }, 5000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <div className=" bg-gray-100 rounded-md p-3 flex justify-between items-center text-[#4D4D4D] font-semibold">
        <p>Stock Details</p>
        <Calendar />
      </div>
      <div className="tradingview-widget-container bg-[#faf7f7] rounded-lg p-4 shadow-md items-center"></div>
    </div>
  );
};

export default StockDetails;
