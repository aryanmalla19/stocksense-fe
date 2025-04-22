import React, { useContext } from "react";
import useGetHoldings from "../../hooks/ipohooks/useGetHoldings";
import { ThemeContext } from "../../context/ThemeContext";

const Holdings = () => {
  const { data } = useGetHoldings();
  const holdings = data?.data || [];
  const { theme } = useContext(ThemeContext);

  return (
    <div
      className={`${theme === "dark" ? " text-dark-text" : " text-light-text"}`}
    >
      <h2 className="text-2xl font-semibold mb-4  pb-2">Your Holdings</h2>
      <div
        className={`p-6 rounded-xl shadow-md transition-all ${
          theme === "dark" ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <div className="grid grid-cols-5 font-semibold text-sm border-b py-3 ">
          <p>Company</p>
          <p>Symbol</p>
          <p>Quantity</p>
          <p>Avg. Price (Rs)</p>
          <p>Investment (Rs)</p>
        </div>

        {holdings.map((item, index) => {
          const investment = item.quantity * item.average_price;

          return (
            <div
              className={`grid grid-cols-5 py-4 text-sm border-b hover:bg-gray-100/10 ${
                theme === "dark" ? "hover:bg-gray-700/30" : "hover:bg-gray-100"
              }`}
              key={index}
            >
              <p>{item.stock.company_name}</p>
              <p>{item.stock.symbol}</p>
              <p>{item.quantity}</p>
              <p>{item.average_price}</p>
              <p>{investment}</p>
            </div>
          );
        })}

        {holdings.length === 0 && (
          <p className="text-center mt-4 text-gray-500">No holdings found.</p>
        )}
      </div>
    </div>
  );
};

export default Holdings;
