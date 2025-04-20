import React from "react";
import useFetchPortfolio from "../../hooks/userhooks/useFetchPortfolio";
import { ThemeContext } from "../../context/ThemeContext";

const formatCurrency = (value) => {
  return Number(value).toLocaleString("en-IN", {
    style: "currency",
    currency: "INR",
    minimumFractionDigits: 2,
  });
};

const CurrentPortfolio = () => {
  const { data, isLoading, error } = useFetchPortfolio();
  const { theme } = React.useContext(ThemeContext);

  const isDark = theme === "dark";

  const baseCardStyle = `rounded-lg p-5 shadow-sm border transition-all duration-300 ${
    isDark
      ? "bg-gray-800 border-gray-700 text-white"
      : "bg-white border-gray-200 text-gray-900"
  }`;

  const labelStyle = "text-sm font-medium text-gray-500 mb-1";
  const valueStyle = "text-2xl font-semibold";

  if (isLoading) return <p className="text-center py-6">Loading portfolio...</p>;
  if (error) return <p className="text-center text-red-500 py-6">Error loading data.</p>;

  return (
    <div
      className={`w-full rounded-xl overflow-hidden border ${
        isDark ? "border-gray-700 bg-gray-900" : "border-gray-100 bg-gray-50"
      }`}
    >
      <div className={`px-6 py-4 border-b ${isDark ? "border-gray-700" : "border-gray-200"}`}>
        <h2 className="text-xl font-bold text-center text-teal-700">Current Portfolio</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6 py-6">
        <div className={baseCardStyle}>
          <p className={labelStyle}>Current Investment</p>
          <p className={`${valueStyle} text-teal-700`}>{formatCurrency(data?.amount)}</p>
        </div>

        <div className={baseCardStyle}>
          <p className={labelStyle}>Total Investment</p>
          <p className={`${valueStyle} text-teal-700`}>{formatCurrency(data?.investment)}</p>
        </div>

        <div className={baseCardStyle}>
          <p className={labelStyle}>Net Worth</p>
          <p className={`${valueStyle} text-teal-700`}>{formatCurrency(data?.net_worth)}</p>
        </div>

        <div className={baseCardStyle}>
          <p className={labelStyle}>Gain / Loss</p>
          <p
            className={`${valueStyle} ${
              data?.gain_loss >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {formatCurrency(data?.gain_loss)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CurrentPortfolio;
