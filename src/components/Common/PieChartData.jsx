import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import usePieChart from "../../hooks/charts/usePieChart";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

// Fixed 12 colors
const fixedColors = [
  "#490B3D",
  "#A7BC5B",
  "#FB8122",
  "#5626C4",
  "#E60576",
  "#FDD935",
  "#7D3780",
  "#8B0000",
  "#008000",
  "#800080",
  "#4E3883",
  "#9E15BF",
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
        backgroundColor: fixedColors.slice(0, labels.length),
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
