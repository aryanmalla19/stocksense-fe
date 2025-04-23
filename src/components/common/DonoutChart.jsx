import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = () => {
  const data = {
    labels: ["Sector1", "Sector2", "Sector3"],
    datasets: [
      {
        label: "Votes",
        data: [300, 50, 100],
        backgroundColor: ["#9E15BF", "#E60576", "#FDD935"],
        borderWidth: 1,
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
