import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import useHistoryID from "../../hooks/stockshooks/useHistoryID";

const Candlestick = ({ id, theme }) => {
  const { data } = useHistoryID(id);
  const candleData = data?.data?.historic || [];

  const formattedData = candleData.map((item) => ({
    x: item.date,
    y: [
      parseFloat(item.open_price),
      parseFloat(item.high_price),
      parseFloat(item.low_price),
      parseFloat(item.close_price),
    ],
  }));

  const [state, setState] = useState({
    series: [{ data: [] }],
    options: {
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
        tooltip: { enabled: true },
        labels: {
          offsetX: 0,
          offsetY: 4,
          style: {
            colors: theme === "dark" ? "#FFFFFF" : "#000000",
          },
        },
        tickAmount: 8,
      },
      tooltip: {
        theme: theme,
      },
    },
  });

  useEffect(() => {
    if (formattedData.length > 0) {
      setState((prev) => ({
        ...prev,
        series: [{ data: formattedData }],
      }));
    }
  }, [data]);

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      options: {
        ...prev.options,
        title: {
          ...prev.options.title,
          style: {
            color: theme === "dark" ? "#FFFFFF" : "#000000",
          },
        },
        xaxis: {
          ...prev.options.xaxis,
          labels: {
            ...prev.options.xaxis.labels,
            style: {
              colors: theme === "dark" ? "#FFFFFF" : "#000000",
            },
          },
        },
        yaxis: {
          ...prev.options.yaxis,
          labels: {
            ...prev.options.yaxis.labels,
            style: {
              colors: theme === "dark" ? "#FFFFFF" : "#000000",
            },
          },
        },
        tooltip: {
          theme: theme,
        },
      },
    }));
  }, [theme]);

  return (
    <div
      className={`${
        theme === "dark" ? "bg-dark-bg text-white" : "bg-light-bg text-black"
      } p-4 rounded`}
    >
      <Chart
        options={state.options}
        series={state.series}
        type="candlestick"
        height={350}
      />
    </div>
  );
};

export default Candlestick;
