import React, { useEffect } from "react";

const useTradingViewWidget = ({ symbol }) => {
  useEffect(() => {
    // Create the TradingView script element
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js";

    // Set widget configuration dynamically based on the symbol
    script.innerHTML = `
      {
        "symbol": "${symbol}", 
        "width": "550",
        "locale": "en",
        "colorTheme": "light",
        "isTransparent": "true"
      }
    `;

    // Find the container where the widget should be inserted
    const container = document.querySelector(
      ".tradingview-widget-container__widget"
    );
    if (container) {
      container.innerHTML = "";
      container.appendChild(script);
    }

    // Clean up the script element on component unmount or symbol change
    return () => {
      if (container) {
        container.innerHTML = "";
      }
    };
  }, [symbol]); // Re-run effect when the symbol changes

  return {};
};

export default useTradingViewWidget;
