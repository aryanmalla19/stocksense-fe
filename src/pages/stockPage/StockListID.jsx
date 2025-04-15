import React from "react";
import { useParams } from "react-router-dom";
import useFetchStocksID from "../../hooks/stockshooks/useFetchStocksID";
import WatchListPage from "../MarketOverview/WatchListPage";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { FaBuilding, FaChartLine, FaRegClone } from "react-icons/fa";

const StockListID = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchStocksID(id);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stock data: {error.message}</div>;

  const { data: stock } = data;

  return (
    <div className="p-6">
      {/* Header */}
      <div className="mb-6">
        <h1 className="text-left text-3xl font-bold">WatchList</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-3 gap-6">
        {/* WatchList Section */}
        <div className="col-span-2">
          <WatchListPage />
        </div>

        {/* Stock Details Section */}
        <div className="col-span-1">
          <div className="text-gray-300 rounded-lg shadow p-6 text-left border border-gray-700">
            <h2 className="text-2xl font-bold mb-5 text-center underline">
              Details of Stock
            </h2>
            <div className="space-y-10">
              <div className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-2">
                  <FaRegClone /> Symbol:
                </span>
                <span>{stock.symbol}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-2">
                  <FaBuilding /> Company:
                </span>
                <span>{stock.company_name}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-2">
                  <FaChartLine /> Sector:
                </span>
                <span>{stock.sector}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="font-medium flex items-center gap-2">
                  <AiOutlineDollarCircle /> Current Price:
                </span>
                <span>${stock.current_price}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockListID;
