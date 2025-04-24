import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

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
    <div className="w-[300px] h-[300px]">
      <Doughnut data={data} options={options} />
    </div>
  );
};
export default DonutChart;
