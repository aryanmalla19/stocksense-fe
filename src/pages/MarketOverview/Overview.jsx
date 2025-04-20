import React, { useContext } from "react";
import PortfolioTracker from "./PortfolioTracker";
import WatchListPage from "./WatchListPage";
import GainerList from "./GainerList";
import { ThemeContext } from "../../context/ThemeContext";

const Overview = () => {
  const { theme } = useContext(ThemeContext);

  const dummyStockHistory = [
    {
      date: "2025-04-01T00:00:00Z",
      open_price: 250,
      close_price: 260,
      high_price: 265,
      low_price: 245,
    },
    {
      date: "2025-04-02T00:00:00Z",
      open_price: 260,
      close_price: 255,
      high_price: 270,
      low_price: 250,
    },
    {
      date: "2025-04-03T00:00:00Z",
      open_price: 255,
      close_price: 258,
      high_price: 262,
      low_price: 252,
    },
    {
      date: "2025-04-04T00:00:00Z",
      open_price: 258,
      close_price: 262,
      high_price: 268,
      low_price: 254,
    },
  ];

  return (
    <div className="outlet-container space-y-4">
      <PortfolioTracker />

      <div className="flex gap-4 h-95">
        <div className="w-2/3">
          <WatchListPage Stockhistory={dummyStockHistory} />
        </div>
        <div className="w-1/2">
          <GainerList theme={theme} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
