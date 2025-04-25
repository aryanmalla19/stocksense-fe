import React, { useEffect, useState } from "react";
import Chart from "react-apexcharts";

const Candlestick = ({ theme, id }) => {
  const [series, setSeries] = useState([{ data: [] }]);

  useEffect(() => {
    const source = new EventSource(
      `http://localhost:8000/api/stocks/${id}/history`
    );

    source.onmessage = (event) => {
      try {
        const { type, data } = JSON.parse(event.data);

        if (type === "initial") {
          const priceData = data.prices.map((item) => ({
            x: new Date(item.date),
            y: [
              parseFloat(item.open_price),
              parseFloat(item.high_price),
              parseFloat(item.low_price),
              parseFloat(item.close_price),
            ],
          }));

          priceData.sort((a, b) => new Date(a.x) - new Date(b.x));

          setSeries([{ data: priceData }]);
        }

        if (type === "update") {
          const updatedPoint = {
            x: new Date(data.date),
            y: [
              parseFloat(data.open_price),
              parseFloat(data.high_price),
              parseFloat(data.low_price),
              parseFloat(data.close_price),
            ],
          };

          setSeries((prevSeries) => {
            const dataExistsIndex = prevSeries[0].data.findIndex(
              (point) =>
                new Date(point.x).getTime() === new Date(data.date).getTime()
            );

            const newData = [...prevSeries[0].data];

            if (dataExistsIndex !== -1) {
              newData[dataExistsIndex] = updatedPoint;
            } else {
              newData.push(updatedPoint);
            }

            newData.sort((a, b) => new Date(a.x) - new Date(b.x));

            return [{ data: [...newData] }];
          });
        }
      } catch (error) {
        console.error("Error processing SSE message:", error);
      }
    };

    return () => {
      source.close();
    };
  }, [id]);

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
