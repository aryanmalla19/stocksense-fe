import React, { useContext } from "react";
import useGetHoldings from "../../hooks/ipohooks/useGetHoldings";
import { ThemeContext } from "../../context/ThemeContext";
import useBuySell from "../../hooks/ipohooks/useBuySell";

const Holdings = () => {
  const { data, refetch } = useGetHoldings();
  const holdings = data?.data || [];
  const { theme } = useContext(ThemeContext);

  const { buySellData } = useBuySell();

  const handleClick = async (stock_id, quantity) => {
    const payload = {
      stock_id: stock_id,
      type: "sell",
      quantity: quantity,
    };

    try {
      await buySellData(payload);
      await refetch();
    } catch (error) {
      console.error("Sell failed:", error);
    }
  };

  return (
    <div
      className={`${theme === "dark" ? " text-dark-text" : " text-light-text"}`}
    >
      <h2 className="text-2xl font-semibold mb-4 pb-2">Your Holdings</h2>
      <div
        className={`p-6 rounded-xl shadow-md transition-all ${
          theme === "dark" ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <div className="grid grid-cols-6 font-semibold text-xl border-b py-3">
          <p>Company</p>
          <p>Symbol</p>
          <p>Quantity</p>
          <p>Avg. Price (Rs)</p>
          <p>Investment (Rs)</p>
          <p>Action</p>
        </div>

        {holdings.map((item, index) => {
          const investment = item.quantity * item.average_price;

          return (
            <div
              className={`grid grid-cols-6 py-4 text-sm border-b hover:bg-gray-100/10 ${
                theme === "dark" ? "hover:bg-gray-700/30" : "hover:bg-gray-100"
              }`}
              key={index}
            >
              <p>{item.stock.company_name}</p>
              <p>{item.stock.symbol}</p>
              <p>{item.quantity}</p>
              <p>{item.average_price}</p>
              <p>{investment}</p>
              <p
                onClick={() => handleClick(item.stock.id, item.quantity)}
                className="p-2 rounded-md bg-button-bg w-20 text-center cursor-pointer"
              >
                Sell
              </p>
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
