import React, { useContext } from "react";
import PortfolioTracker from "./PortfolioTracker";
import { ThemeContext } from "../../context/ThemeContext";
import useHistoryID from "../../hooks/stockshooks/useHistoryID";
import WatchListPage from "./WatchListPage";
import PieChartData from "../../components/common/PieChartData";

const Overview = () => {
  const { theme } = useContext(ThemeContext);
  const { historyData } = useHistoryID(10);
  return (
    <div className="outlet-container">
      <PortfolioTracker />

      <div className="flex flex-col gap-4 md:flex-row h-93">
        <div className="w-110 md:w-1/2 lg:w-2/3  h-93">
          <WatchListPage Stockhistory={historyData?.data?.prices} />
        </div>
        <div className="w-[480px] md:1/2 lg:w-1/3">
          <PieChartData theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
