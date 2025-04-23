import React from "react";
import useFetchPortfolio from "../../hooks/userhooks/useFetchPortfolio";
import { ThemeContext } from "../../context/ThemeContext";

const PortfolioPage = () => {
  const { data, isLoading, error } = useFetchPortfolio();
  const { theme } = React.useContext(ThemeContext);

  const isDark = theme === "dark";

  const baseCardStyle = `rounded-lg p-5 shadow-sm border transition-all duration-300 ${
    isDark
      ? "bg-dark-bg border-gray-600 text-dark-text"
      : "bg-light-bg border-gray-200 text-light-text"
  }`;

  const labelStyle = "text-sm font-medium text-gray-500 mb-1";
  const valueStyle = "text-2xl font-semibold";

  if (isLoading)
    return <p className="text-center py-6">Loading portfolio...</p>;
  if (error)
    return <p className="text-center text-red-500 py-6">Error loading data.</p>;

  return (
    <>
      <div className="flex justify-between items-center mb-6 mx-6 text-[#9E15BF] mt-5">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          Portfolio
        </h1>
      </div>
      <div
        className={`outlet-container rounded-md   ${
          isDark
            ? "bg-dark-bg border-gray-600 text-dark-text"
            : "bg-light-bg border-gray-200 text-light-text"
        }`}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-6">
          <div className={baseCardStyle}>
            <p className={labelStyle}>Current Investment</p>
            <p className={`${valueStyle} text-gray-500`}>{data?.amount}</p>
          </div>

          <div className={baseCardStyle}>
            <p className={labelStyle}>Total Investment</p>
            <p className={`${valueStyle} text-gray-500`}>{data?.investment}</p>
          </div>

          <div className={baseCardStyle}>
            <p className={labelStyle}>Net Worth</p>
            <p className={`${valueStyle} text-gray-500`}>{data?.net_worth}</p>
          </div>

          <div className={baseCardStyle}>
            <p className={labelStyle}>Gain / Loss</p>
            <p
              className={`${valueStyle} ${
                data?.gain_loss >= 0 ? "text-green-600" : "text-red-600"
              }`}
            >
              {data?.gain_loss}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
