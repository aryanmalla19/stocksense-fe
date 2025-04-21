import React from "react";
import {useStocks} from "../../hooks/stockshooks/useStocks";

const GainerList = ({ theme }) => {
  const { data, isLoading, isError } = useStocks({per_page:5});
  if (isLoading) {
    return (
      <div className="p-3 rounded-md">
        <h1>Loading...</h1>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="p-3 rounded-md">
        <h1>Error fetching stock data</h1>
      </div>
    );
  }

  return (
    <div
      className={`p-3 rounded-md ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
    >
      <h1 className="text-red-400 font-bold rounded-md text-xl text-center">
        Top Gainers
      </h1>

      <div className="mt-5">
        <ul className="flex justify-around font-semibold w- ml-2 ">
          <li>Symbol</li>
          <li>CH</li>
          <li>CH%</li>
          <li>LTP</li>
        </ul>
        <hr className="border-gray-400 w-full my-2" />
      </div>

      <div>
        {data?.data.slice(0, 5).map((stock) => (
          <div className="flex items-center gap-3 p-2" key={stock.id}>
            <div className="w-9 h-9 flex items-center justify-center rounded-full text-lg font-bold bg-blue-400 text-white">
              {stock.company_name?.charAt(0)}
            </div>
            <ul
              className={`flex justify-around w-full p-2 rounded-md ${
                theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              <li>{stock.symbol}</li>
              <li className="text-accent-green">{stock.open_price}</li>
              <li className="text-accent-green">{stock.close_price}</li>
              <li>{stock.current_price}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GainerList;
