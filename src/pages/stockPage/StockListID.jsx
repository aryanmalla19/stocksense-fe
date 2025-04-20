import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchStocksID from "../../hooks/stockshooks/useFetchStocksID";
import { ThemeContext } from "../../context/ThemeContext";
import useHistoryID from "../../hooks/stockshooks/useHistoryID";
import WatchListPage from "../marketOverview/WatchListPage";
import StockDetails from "./StockDetails";
import MarketSummary from "./MarketSummary";

const StockListID = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchStocksID(id);
  const { theme } = useContext(ThemeContext);

  const { historyData } = useHistoryID(id);
  const Stockhistory = historyData?.data?.historic || [];

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stock data: {error.message}</div>;

  const { data: stock } = data;

  return (
    <>
      <StockDetails theme={theme} stock={stock} />
      <div className="flex flex-col md:flex-row w-full gap-2 my-4 h-120">
        <div
          className={`w-full md:w-1/2 border ${
            theme === "dark"
              ? " bg-dark-bg text-dark-text border-gray-800"
              : "border-gray-100 bg-light-bg text-light-text"
          } rounded-md`}
        >
          <MarketSummary theme={theme} stock={stock} />
        </div>
        <div
          className={`w-3/3 border ${
            theme === "dark"
              ? " bg-dark-bg text-dark-text border-gray-800"
              : "border-gray-100 bg-light-bg text-light-text"
          } rounded-md`}
        >
          <WatchListPage Stockhistory={Stockhistory} id={id} />
        </div>
      </div>
    </>
  );
};

export default StockListID;
