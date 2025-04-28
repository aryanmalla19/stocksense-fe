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
import usePieChart from "../../hooks/charthooks/usePieChart";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Helper function to generate random colors
const generateRandomColor = () => {
  const randomColor = () => {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  };
  return Array.from({ length: 10 }, randomColor);
};

const PieChartData = ({ theme }) => {
  const isDark = theme === "dark";
  const { chartdata } = usePieChart();

  const labels = chartdata?.data ? chartdata.data.map((item) => item.name) : [];
  const value = chartdata?.data ? chartdata.data.map((item) => item.value) : [];

  const randomColors = generateRandomColor();

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sectors",
        data: value,
        backgroundColor: randomColors,
      },
    ],
  };

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
        text: "Sectors list",
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
