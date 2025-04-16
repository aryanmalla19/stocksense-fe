import React from "react";
import PortfolioTracker from "./PortfolioTracker";
import WatchListPage from "./WatchListPage";

const Overview = () => {
  return (
    <div className="outlet-container">
      <PortfolioTracker />
      <WatchListPage />
    </div>
  );
};

export default Overview;
