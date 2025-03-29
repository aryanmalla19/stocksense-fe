import React, { useState, useEffect } from "react";
import useTradingViewWidget from "../hooks/useTradingViewWidget";

const StockDetails = () => {
  const [symbol, setSymbol] = useState("NASDAQ:AAPL");

  useTradingViewWidget({ symbol });

  useEffect(() => {
    const timer = setTimeout(() => {
      setSymbol("NASDAQ:GOOGL"); // Change symbol dynamically
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {/* Ensure correct structure for TradingView widget */}
      <div className="tradingview-widget-container bg-[#faf7f7] rounded-lg shadow-md items-center details-container">
        <div
          id="tradingview-widget"
          className="tradingview-widget-container__widget"
        ></div>
      </div>
    </div>
  );
};

export default StockDetails;
