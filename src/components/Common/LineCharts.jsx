import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineCharts = ({ isDark }) => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Investment",
        data: [4000, 3000, 5000, 2000, 2780, 1890],
        fill: false,
        borderColor: "#4CAF50",
        tension: 0.4,
      },
      {
        label: "Loss",
        data: [2000, 1000, 4000, 1500, 1000, 2000],
        fill: false,
        borderColor: "#F44336",
        tension: 0.4,
      },
    ],
  };

  const textColor = isDark ? "#ffffff" : "#000000";

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom",
        labels: {
          color: textColor,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: isDark ? "#333" : "#ddd",
        },
      },
      y: {
        ticks: {
          color: textColor,
        },
        grid: {
          color: isDark ? "#333" : "#ddd",
        },
      },
    },
  };

  return (
    <div className="w-full h-[400px] p-4">
      <Line data={chartData} options={options} />
    </div>
  );
};

export default LineCharts;
