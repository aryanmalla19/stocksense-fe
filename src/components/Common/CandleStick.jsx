import React from "react";
import Chart from "react-apexcharts";

const Candlestick = ({ theme, Stockhistory }) => {
  const sortedStockhistory = [...(Stockhistory || [])].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const series = [
    {
      data: sortedStockhistory.map((item) => ({
        x: new Date(item.date),
        y: [
          parseFloat(item.open_price),
          parseFloat(item.high_price),
          parseFloat(item.low_price),
          parseFloat(item.close_price),
        ],
      })),
    },
  ];

  const options = {
    chart: {
      type: "candlestick",
      height: 350,
    },
    title: {
      text: "Candlestick Chart",
      align: "left",
      style: {
        color: theme === "dark" ? "#FFFFFF" : "#000000",
      },
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      },
    },
    yaxis: {
      tooltip: {
        enabled: true,
      },
      labels: {
        style: {
          colors: theme === "dark" ? "#FFFFFF" : "#000000",
        },
      },
    },
    tooltip: {
      theme: theme,
    },
  };

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-bg text-white" : "bg-light-bg text-black"
      } p-4 rounded`}
    >
      <Chart
        options={options}
        series={series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Candlestick;
