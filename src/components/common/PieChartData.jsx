import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const data = {
  labels: ["Sector1", "Sector2", "Sector"],
  datasets: [
    {
      label: "Sectors",
      data: [41, 50, 8],
      backgroundColor: ["#FB8122", "#E60576", "#4E3883"],
      borderColor: "#fff",
      borderWidth: 2,
    },
  ],
};
const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: " Pie Chart",
    },
  },
};

const PieChartData = () => {
  return (
    <div className="w-[300px] h-[300px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartData;
