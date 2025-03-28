// import React, { useEffect, useRef } from "react";

// function StockChart() {
//   const container = useRef();

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src =
//       "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
//     script.type = "text/javascript";
//     script.async = true;
//     script.innerHTML = `
//         {
//           "autosize": true,
//           "symbol": "NASDAQ:AAPL",
//           "interval": "D",
//           "timezone": "Etc/UTC",
//           "theme": "dark",
//           "style": "1",
//           "locale": "en",
//           "allow_symbol_change": true,
//           "support_host": "https://www.tradingview.com"
//         }`;
//     container.current.appendChild(script);
//   }, []);

//   return (
//     <div
//       className="tradingview-widget-container"
//       ref={container}
//       style={{ height: "90%", width: "100%" }}
//     >
//       <div
//         className="tradingview-widget-container__widget"
//         style={{ height: "calc(100% - 32px)", width: "100%" }}
//       ></div>
//     </div>
//   );
// }

// export default StockChart;

import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

function StockChart() {
  const [stockData, setStockData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      // Simulating OHLC (Open, High, Low, Close) stock data
      const data = [
        { date: "2024-03-01", open: 148, high: 152, low: 147, close: 150 },
        { date: "2024-03-02", open: 150, high: 157, low: 149, close: 155 },
        { date: "2024-03-03", open: 155, high: 156, low: 152, close: 153 },
        { date: "2024-03-04", open: 153, high: 162, low: 151, close: 160 },
        { date: "2024-03-05", open: 160, high: 161, low: 157, close: 158 },
        { date: "2024-03-01", open: 148, high: 152, low: 147, close: 150 },
        { date: "2024-03-02", open: 150, high: 157, low: 149, close: 155 },
        { date: "2024-03-03", open: 155, high: 156, low: 152, close: 153 },
        { date: "2024-03-04", open: 153, high: 162, low: 151, close: 160 },
        { date: "2024-03-05", open: 160, high: 161, low: 157, close: 158 },
        { date: "2024-03-01", open: 148, high: 152, low: 147, close: 150 },
        { date: "2024-03-02", open: 150, high: 157, low: 149, close: 155 },
        { date: "2024-03-03", open: 155, high: 156, low: 152, close: 153 },
        { date: "2024-03-04", open: 153, high: 162, low: 151, close: 160 },
        { date: "2024-03-05", open: 160, high: 161, low: 157, close: 158 },
      ];
      setStockData(data);
    };

    fetchData();
  }, []);

  // Formatting data for candlestick chart
  const series = [
    {
      name: "Stock Price",
      data: stockData.map((item) => ({
        x: item.date, // X-axis (date)
        y: [item.open, item.high, item.low, item.close], // Candlestick format
      })),
    },
  ];

  const options = {
    chart: { type: "candlestick", background: "#222" },
    xaxis: { type: "category", labels: { style: { colors: "#fff" } } },
    yaxis: {
      tooltip: { enabled: true },
      labels: { style: { colors: "#fff" } },
    },
    theme: { mode: "dark" },
    tooltip: { theme: "dark" },
  };

  return (
    <div style={{ width: "100%", height: "90%" }}>
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height="95%"
      />
    </div>
  );
}

export default StockChart;
