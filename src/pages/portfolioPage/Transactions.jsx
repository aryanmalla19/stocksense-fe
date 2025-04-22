import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTransactions from "../../hooks/ipohooks/useTransactions";

const Transactions = () => {
  const { theme } = useContext(ThemeContext);
  const { data } = useTransactions();
  const transactionData = data?.data || [];

  return (
    <div
      className={`${theme === "dark" ? "text-dark-text" : "text-light-text"}`}
    >
      <h2 className="text-2xl font-semibold mb-4 pb-2">Your Transactions</h2>
      <div
        className={`max-h-135 overflow-y-scroll scrollbar-hidden p-6 rounded-xl shadow-md transition-all ${
          theme === "dark" ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 font-semibold text-xl border-b py-3">
            <p>Company</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total Price (Rs)</p>
            <p>Transaction Fee (Rs)</p>
            <p>Type</p>
          </div>

          {transactionData.map((item, index) => {
            return (
              <div
                className={`grid grid-cols-6 py-4 text-sm border-b hover:bg-gray-100/10 ${
                  theme === "dark"
                    ? "hover:bg-gray-700/30"
                    : "hover:bg-gray-100"
                }`}
                key={index}
              >
                <p>{item.company_name}</p>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>{item.total_price}</p>
                <p>{item.transaction_fee}</p>
                <p>{item.type}</p>
              </div>
            );
          })}

          {transactionData.length === 0 && (
            <p className="text-center mt-4 text-gray-500">
              No Transactions found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Transactions;
