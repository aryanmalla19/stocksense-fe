import React from "react";
import useGetTransaction from "../../hooks/ipohooks/useGetTransaction";

const Holdings = ({ theme }) => {
  const { data } = useGetTransaction();
  const transactions = data?.data || [];
  console.log(transactions);
  return (
    <div
      className={`p-4 rounded-md ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
    >
      <div className="flex justify-between font-bold border-b pb-2 mb-2">
        <p>Company Name</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total Price</p>
        <p>Transaction Fee</p>
      </div>

      {transactions.map((item, index) => {
        return (
          <div className="flex justify-between py-2" key={index}>
            <p>{item.company_name}</p>
            <p>{item.quantity}</p>
            <p>{item.price}</p>
            <p>{item.total_price}</p>
            <p>{item.transaction_fee}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Holdings;
