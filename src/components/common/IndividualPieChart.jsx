import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import useIndividualPieChart from "../../hooks/charthooks/useIndividualPieChart";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Pie Chart",
    },
  },
};

const IndividualPieChart = () => {
  const { chartdata } = useIndividualPieChart();

  const labels = chartdata?.data ? chartdata.data.map((item) => item.name) : [];
  const values = chartdata?.data
    ? chartdata.data.map((item) => item.value)
    : [];

  // Generate random colors for each sector dynamically
  const generateRandomColor = () => {
    return Array.from({ length: labels.length }, () => {
      return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )}, ${Math.floor(Math.random() * 256)})`;
    });
  };

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Sectors",
        data: values,
        backgroundColor: generateRandomColor(),
        borderColor: "#fff",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div className="w-[300px] h-[300px]">
      <Pie data={data} options={options} />
    </div>
  );
};

export default IndividualPieChart;
