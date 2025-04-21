import React from "react";
import {
  FiTrendingUp,
  FiCalendar,
  FiDollarSign,
  FiLayers,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const ApplyShareOverview = ({ ipo, stock, isDark }) => {
  const cardBaseStyle = `p-6 rounded-lg ${
    isDark ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
  }`;

  return (
    <div className={cardBaseStyle}>
      <h2 className="text-2xl font-semibold mb-4 text-center">IPO Overview</h2>
      <hr className={`${isDark ? "border-gray-600" : "border-gray-200"}`} />

      <div className="flex items-center justify-between my-6 flex-wrap gap-2">
        <div className="text-xl font-bold flex items-center gap-2">
          <FiTrendingUp className="text-teal-500" />
          {ipo.company_name} ({stock?.symbol})
        </div>
        <span
          className={`px-3 py-1 rounded-full text-sm font-medium ${
            isDark
              ? "bg-teal-900/50 text-teal-300"
              : "bg-teal-100 text-teal-800"
          }`}
        >
          {stock?.sector}
        </span>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 mt-4">
        <InfoCard
          icon={<FiDollarSign />}
          label="Issue Price"
          value={`Rs. ${ipo.issue_price}`}
          isDark={isDark}
        />
        <InfoCard
          icon={<FiLayers />}
          label="Total Shares"
          value={ipo.total_shares}
          isDark={isDark}
        />
        <InfoCard
          icon={<FiClock />}
          label="Market Price"
          value={`Rs. ${ipo.issue_price}`}
          isDark={isDark}
        />
        <InfoCard
          icon={<FiCalendar />}
          label="Open Date"
          value={ipo.open_date}
          isDark={isDark}
        />
        <InfoCard
          icon={<FiCalendar />}
          label="Close Date"
          value={ipo.close_date}
          isDark={isDark}
        />
        <InfoCard
          icon={<FiCheckCircle />}
          label="Listing Date"
          value={ipo.listing_date}
          isDark={isDark}
        />
      </div>
    </div>
  );
};

const InfoCard = ({ icon, label, value, isDark }) => (
  <div className="flex items-start gap-3">
    <div
      className={`p-2 rounded-full ${
        isDark ? "bg-teal-900/50 text-teal-600 " : "bg-teal-600/50 text-white"
      }`}
    >
      {icon}
    </div>
    <div>
      <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
      <div className="font-medium">{value}</div>
    </div>
  </div>
);

export default ApplyShareOverview;
