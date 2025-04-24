import React, { useContext } from "react";
import PortfolioTracker from "./PortfolioTracker";
import GainerList from "./GainerList";
import { ThemeContext } from "../../context/ThemeContext";
import useHistoryID from "../../hooks/stockshooks/useHistoryID";
import WatchListPage from "./WatchListPage";

const Overview = () => {
  const { theme } = useContext(ThemeContext);
  const { data } = useHistoryID(2);
  return (
    <div className="outlet-container">
      <PortfolioTracker />

      <div className="flex gap-4 h-95">
        <div className="w-2/3">
          <WatchListPage Stockhistory={data?.data?.prices} />
        </div>
        <div className="w-1/2">
          <GainerList theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
