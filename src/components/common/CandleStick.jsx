import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";
import useHistoryID from "../../hooks/stockshooks/useHistoryID";

const Candlestick = ({ Stockhistory, id }) => {
  console.log(Stockhistory, id);
  const { data } = useHistoryID(id);
  const candleData = data?.data?.historic || [];

  const formattedData = candleData.map((item) => ({
    x: new Date(item.date),
    y: [
      parseFloat(item.open_price),
      parseFloat(item.high_price),
      parseFloat(item.low_price),
      parseFloat(item.close_price),
    ],
  }));

  const [state, setState] = useState({
    series: [
      {
        data: [],
      },
    ],
    options: {
      chart: {
        type: "candlestick",
        height: 350,
      },
      title: {
        text: "Candlestick Chart Example",
        align: "left",
      },
      xaxis: {
        type: "datetime",
      },
      yaxis: {
        min: 100,
        max: 1000,
        tooltip: {
          enabled: true,
        },
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

  return (
    <div>
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
