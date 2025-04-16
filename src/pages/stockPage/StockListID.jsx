import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import useFetchStocksID from "../../hooks/stockshooks/useFetchStocksID";
import { ThemeContext } from "../../context/ThemeContext";

const StockListID = () => {
  const { id } = useParams();
  const { data, isLoading, error } = useFetchStocksID(id);
  const { theme } = useContext(ThemeContext);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching stock data: {error.message}</div>;

  const { data: stock } = data;

  return (
    <div
      className={`p-4 rounded-md flex items-center ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-red-500"
      }`}
    >
      <div className="w-12 h-12 mr-4 flex items-center justify-center rounded-full text-lg font-bold bg-blue-400 text-white">
        {stock.company_name?.charAt(0)}
      </div>
      <h1 className=" text-3xl text-semibold">
        {stock.company_name} ({stock.symbol})
      </h1>
    </div>
  );
};

export default StockListID;
