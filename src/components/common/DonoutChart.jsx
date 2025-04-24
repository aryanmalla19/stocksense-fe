import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { PiChartDonutFill } from "react-icons/pi";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Buy", "Sell"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50],
        backgroundColor: ["#008000", "#ff0000"],
      },
    ],
  };

  const options = {
    cutout: "70%",
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center my-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex gap-2">
            <PiChartDonutFill className="text-purple-500 text-2xl" />
            Stock Buy/Sell Ratio
          </h2>
          <p className="text-sm mt-1">
            A visual breakdown of your transactions
          </p>
        </div>
        <div className="w-[300px] h-[300px]">
          <Doughnut data={data} options={options} />
        </div>
      </div>
    </>
  );
};
export default DonutChart;
