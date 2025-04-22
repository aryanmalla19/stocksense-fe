import React, { useContext } from "react";
import useGetHoldings from "../../hooks/ipohooks/useGetHoldings";
import { ThemeContext } from "../../context/ThemeContext";
import useBuySell from "../../hooks/ipohooks/useBuySell";
import { FaArrowDown, FaMoneyBillAlt, FaTrashAlt } from "react-icons/fa"; // Font Awesome Icons

const Holdings = () => {
  const { data, refetch, isLoading } = useGetHoldings();
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
      className={`${
        theme === "dark" ? "text-dark-text" : "text-light-text"
      } min-h-screen p-6`}
    >
      <h2 className="text-3xl font-semibold mb-6 pb-2 flex items-center justify-between">
        Your Holdings
        {isLoading && (
          <div className="animate-spin h-6 w-6 border-4 border-t-transparent border-blue-500 rounded-full" />
        )}
      </h2>

      <div
        className={`p-6 rounded-xl shadow-lg transition-all ${
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

        {holdings.length === 0 ? (
          <p className="text-center mt-4 text-gray-500">No holdings found.</p>
        ) : (
          holdings.map((item, index) => {
            const investment = item.quantity * item.average_price;

            return (
              <div
                className={`grid grid-cols-6 py-4 text-sm border-b hover:bg-gray-100/10 ${
                  theme === "dark"
                    ? "hover:bg-gray-700/30"
                    : "hover:bg-gray-100"
                }`}
                key={index}
              >
                <p className="flex items-center">
                  <FaArrowDown className="text-lg mr-2 text-green-500" />
                  {item.stock.company_name}
                </p>
                <p>{item.stock.symbol}</p>
                <p>{item.quantity}</p>
                <p>{item.average_price}</p>
                <p>{investment}</p>
                <p
                  onClick={() => handleClick(item.stock.id, item.quantity)}
                  className="flex items-center justify-center cursor-pointer p-2 rounded-md bg-red-500 text-white w-24 hover:bg-red-600 transition-all"
                >
                  <FaTrashAlt className="mr-2" /> Sell
                </p>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Holdings;
