import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchStocksID from "../../hooks/stockshooks/useFetchStocksID";
import { ThemeContext } from "../../context/ThemeContext";
import TooltipIcon from "./TooltipIcon";
import StockInfobadge from "./StockInfobadge";
import {
  FaChartLine,
  FaArrowUp,
  FaArrowDown,
  FaChartBar,
  FaArrowCircleDown,
} from "react-icons/fa";

import StockInfoRow from "./StockInfoRow";

const stockFields = [
  {
    label: "LTP",
    valueKey: "current_price",
    icon: <FaChartLine className="inline w-4 h-4 ml-1" />,
    color: "text-red-500",
  },
  {
    label: "Open",
    valueKey: "open_price",
    icon: <FaArrowUp className="inline w-4 h-4 ml-1" />,
  },
  {
    label: "Close",
    valueKey: "close_price",
    icon: <FaArrowDown className="inline w-4 h-4 ml-1" />,
  },
  {
    label: "High",
    valueKey: "high_price",
    icon: <FaChartBar className="inline w-4 h-4 ml-1" />,
    color: "text-gray-500",
  },
  {
    label: "Low",
    valueKey: "low_price",
    icon: <FaArrowCircleDown className="inline w-4 h-4 ml-1" />,
  },
];

const StockListID = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchStocksID(id);
  const { theme } = useContext(ThemeContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stock data: {error.message}</div>;

  const { data: stock } = data;

  return (
    <div>
      {/* Price and Chart Info */}
      <div className="grid grid-cols-3 md:grid-cols-3 gap-6 mt-6">
        <div className="col-span-1">
          <img />
        </div>
        <div
          className={`${
            theme === "dark" ? "bg-gray-600" : "bg-gray-100"
          } p-4 rounded-lg shadow-md col-span-2 `}
        >
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold mb-2 flex-grow text-center">
              {stock.company_name}
            </h3>
            <TooltipIcon />
          </div>

          <ul className="space-y-4 flex gap-8">
            <StockInfobadge
              label="SYMBOL"
              value={stock.symbol}
              bgColor="bg-green-600 hover:bg-green-700"
            />
            <StockInfobadge
              label="SECTOR"
              value={stock.sector}
              bgColor="bg-yellow-500 hover:bg-yellow-600"
            />
          </ul>

          <hr className="border border-gray-400" />

          <div className="my-5 font-semibold space-y-4">
            {/* First row: LTP, Open, Close */}
            <StockInfoRow items={stockFields.slice(0, 3)} stock={stock} />

            {/* Second row: High, Low */}
            <StockInfoRow
              items={[
                { label: "", valueKey: "", icon: null, empty: true },
                ...stockFields.slice(3),
              ]}
              stock={stock}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StockListID;
