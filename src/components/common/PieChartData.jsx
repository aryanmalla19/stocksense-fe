import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
  Colors,
} from "chart.js";

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
const PieChartData = ({ isDark }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          color: isDark ? "#ffffff" : "#000000",
        },
      },
      title: {
        display: true,
        text: " Pie Chart",
        color: isDark ? "#ffffff" : "#000000",
        font: { size: 18 },
      },
    },
  };

  return (
    <div>
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChartData;
