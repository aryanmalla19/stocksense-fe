import React, { useContext } from "react";
import PortfolioTracker from "./PortfolioTracker";
import WatchListPage from "./WatchListPage";
import GainerList from "./GainerList";
import { ThemeContext } from "../../context/ThemeContext";

const Overview = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="outlet-container space-y-4">
      <PortfolioTracker />

      <div className="flex gap-4">
        <div className="w-2/3">
          <WatchListPage />
        </div>
        <div className="w-1/2">
          <GainerList theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
