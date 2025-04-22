import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTransactions from "../../hooks/ipohooks/useTransactions";
import { FaArrowDown, FaArrowUp, FaMoneyBillAlt } from "react-icons/fa";

const Transactions = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading } = useTransactions();
  const transactionData = data?.data || [];

  return (
    <div
      className={`${
        theme === "dark" ? "text-dark-text" : "text-light-text"
      } min-h-screen p-6`}
    >
      <h2 className="text-3xl font-semibold mb-6 pb-2 flex items-center justify-between">
        Your Transactions
        {isLoading && (
          <div className="animate-spin h-6 w-6 border-4 border-t-transparent border-blue-500 rounded-full" />
        )}
      </h2>

      <div
        className={`max-h-[600px] overflow-y-scroll scrollbar-hidden p-6 rounded-xl shadow-lg transition-all ${
          theme === "dark" ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 font-semibold text-xl border-b py-3">
            <p>Company</p>
            <p>Price (Rs)</p>
            <p>Quantity</p>
            <p>Total Price (Rs)</p>
            <p>Transaction Fee (Rs)</p>
            <p>Type</p>
          </div>

          {transactionData.length === 0 ? (
            <p className="text-center mt-4 text-gray-500">
              No Transactions found.
            </p>
          ) : (
            transactionData.map((item, index) => {
              return (
                <div
                  className={`grid grid-cols-6 py-4 text-sm border-b hover:bg-gray-100/10 ${
                    theme === "dark"
                      ? "hover:bg-gray-700/30"
                      : "hover:bg-gray-100"
                  }`}
                  key={index}
                >
                  <p className="flex items-center">{item.company_name}</p>
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                  <p>{item.total_price}</p>
                  <p>{item.transaction_fee}</p>
                  <p
                    className={`flex items-center justify-center p-2 rounded-md text-sm w-24 ${
                      item.type === "buy"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.type === "buy" ? (
                      <FaArrowUp className="mr-2" />
                    ) : (
                      <FaArrowDown className="mr-2" />
                    )}
                    {item.type}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
