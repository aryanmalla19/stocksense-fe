import React, { useState, useEffect } from "react";
import Calendar from "../components/Calender";
import useTradingViewWidget from "../hooks/useTradingViewWidget";

const StockDetails = () => {
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");

  // Call the hook (DO NOT render it in JSX)
  useTradingViewWidget({ symbol });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSymbol("NASDAQ:GOOGL"); // Change symbol dynamically
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <div className="bg-gray-100 rounded-md p-3 flex justify-between items-center text-[#4D4D4D] font-semibold">
        <p>Stock Details</p>
        <Calendar />
      </div>

      {/* Ensure correct structure for TradingView widget */}
      <div className="tradingview-widget-container bg-[#faf7f7] rounded-lg p-4 shadow-md items-center mt-5 details-container">
        <div
          id="tradingview-widget"
          className="tradingview-widget-container__widget"
        ></div>
      </div>
    </div>
  );
};

export default StockDetails;
