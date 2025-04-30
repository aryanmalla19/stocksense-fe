import React, { useContext } from "react";
import PortfolioTracker from "./PortfolioTracker";
import { ThemeContext } from "../../context/ThemeContext";
import useHistoryID from "../../hooks/stockshooks/useHistoryID";
import WatchListPage from "./WatchListPage";
import PieChartData from "../../components/common/PieChartData";

const Overview = () => {
  const { theme } = useContext(ThemeContext);
  const { historyData } = useHistoryID(1);
  return (
    <div className="outlet-container flex flex-col">
      <div className=" ml-10 w-11/12 overflow-hidden">
        <PortfolioTracker />
      </div>
      <div className="flex justify-between flex-col md:flex-row">
        <div className="w-7/12 h-93">
          <WatchListPage Stockhistory={historyData?.data?.prices} />
        </div>
        <div className="w-4/12">
          <PieChartData theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
