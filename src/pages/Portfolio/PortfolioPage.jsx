import React from "react";
import useFetchPortfolio from "../../hooks/user/useFetchPortfolio";
import { ThemeContext } from "../../context/ThemeContext";
import {
  FaWallet,
  FaPiggyBank,
  FaBalanceScale,
  FaChartLine,
} from "react-icons/fa";
import LineCharts from "../../components/Common/LineCharts";
import IndividualPieChart from "../../components/Common/IndividualPieChart";

const PortfolioPage = () => {
  const { data, isLoading, error } = useFetchPortfolio();
  const { theme } = React.useContext(ThemeContext);

  const isDark = theme === "dark";

  const baseCardStyle = `flex items-center gap-4 rounded-2xl p-6 shadow-md border hover:scale-[1.02] transition-transform duration-300 ${
    isDark
      ? "bg-black text-dark-text border-gray-800"
      : "bg-light-bg text-light-text border-gray-200"
  }`;

  const labelStyle = "text-sm font-medium ";
  const valueStyle = "text-2xl font-bold";

  if (isLoading)
    return <p className="text-center py-6 text-lg">Loading portfolio...</p>;
  if (error)
    return <p className="text-center text-red-500 py-6">Error loading data.</p>;

  const cardData = [
    {
      label: "Current Investment",
      value: parseFloat(data?.amount).toFixed(2),
      icon: <FaWallet className="text-3xl text-purple-600" />,
    },
    {
      label: "Total Investment",
      value: parseFloat(data?.investment).toFixed(2),
      icon: <FaPiggyBank className="text-3xl text-pink-500" />,
    },
    {
      label: "Net Worth",
      value: parseFloat(data?.net_worth).toFixed(2),
      icon: <FaBalanceScale className="text-3xl text-blue-500" />,
    },
    {
      label: "Gain / Loss",
      value: data?.gain_loss,
      icon: (
        <FaChartLine
          className={`text-3xl ${
            data?.gain_loss >= 0 ? "text-green-500" : "text-red-500"
          }`}
        />
      ),
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center mb-6 mx-6 mt-5 ">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          My Portfolio
        </h1>
      </div>
      <div
        className={`outlet-container rounded-md mx-6 shadow-md  ${
          isDark ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 p-6 `}
        >
          {cardData.map((card, idx) => (
            <div key={idx} className={baseCardStyle}>
              {card.icon}
              <div>
                <p className={labelStyle}>{card.label}</p>
                <p
                  className={`${valueStyle} ${
                    card.label === "Gain / Loss"
                      ? data?.gain_loss >= 0
                        ? "text-green-600"
                        : "text-red-600"
                      : ""
                  }`}
                >
                  {card.value}
                </p>
              </div>
            </div>
          ))}
        </div>
        <div className=" flex flex-col lg:flex-row gap-6">
          <div className="w-1/2 lg:w-1/3 ">
            <IndividualPieChart isDark={isDark} />
          </div>
          <div className="w-1/2 lg:w-2/3 h-[400px]">
            <LineCharts isDark={isDark} />
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
