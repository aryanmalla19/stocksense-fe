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
import useIndividualPieChart from "../../hooks/charthooks/useIndividualPieChart";

ChartJS.register(ArcElement, Tooltip, Legend, Title);
const IndividualPieChart = ({ isDark }) => {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Individual Sector Chart",
        font: {
          size: 18,
        },
        color: isDark ? "#ffffff" : "000000",
      },
    },
  };

  const { chartdata } = useIndividualPieChart();

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
        backgroundColor: ["#490B3D", "#9E15BF", "#FB8122", "#7D3780"],
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
