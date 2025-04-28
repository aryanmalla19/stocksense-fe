import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import usePieChart from "../../hooks/charthooks/usePieChart";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Fixed 12 colors
const fixedColors = [
  "#490B3D", // pink
  "#A7BC5B", // blue
  "#FB8122", // yellow
  "#5626C4", // teal
  "#E60576", // purple
  "#FDD935", // orange
  "#7D3780", // light gray
  "#8B0000", // dark red
  "#008000", // green
  "#800080", // dark purple
  "#4E3883", // gold
  "#9E15BF", // dark turquoise
];

const PieChartData = ({ theme }) => {
  const isDark = theme === "dark";
  const { chartdata } = usePieChart();

  const labels = chartdata?.data ? chartdata.data.map((item) => item.name) : [];
  const values = chartdata?.data
    ? chartdata.data.map((item) => item.value)
    : [];

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sectors",
        data: values,
        backgroundColor: fixedColors.slice(0, labels.length), // only pick required colors
        borderColor: "#fff",
        borderWidth: 2,
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
