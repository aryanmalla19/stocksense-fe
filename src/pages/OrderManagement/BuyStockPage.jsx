import React, { useEffect, useState } from "react";
import Details from "./Details";

const InputField = ({ label, type, theme, value, onChange }) => {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-1.5 w-24 rounded-md mt-2 appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none focus:outline-none
          ${theme === "dark" ? "bg-black " : "bg-gray-100"}`}
      />
    </div>
  );
};

const BuyStockPage = ({
  theme,
  stocksData,
  selectedSymbol,
  setSelectedSymbol,
  quantity,
  setQuantity,
  handleSubmit,
}) => {
  const selectedStock = stocksData?.data?.find(
    (stock) => stock.symbol === selectedSymbol
  );

  const [transactionfee, setTransactionFee] = useState("");
  const [subTotal, setSubTotal] = useState("");
  const [total, setTotal] = useState("");

  useEffect(() => {
    if (selectedStock && quantity) {
      const price = selectedStock.current_price;
      const qty = Number(quantity);
      const subtotal = price * qty;
      const fee = subtotal * 0.01;
      const grandTotal = subtotal + fee;

      setTransactionFee(fee.toFixed(2));
      setSubTotal(subtotal.toFixed(2));
      setTotal(grandTotal.toFixed(2));
    } else {
      setTransactionFee("");
      setSubTotal("");
      setTotal("");
    }
  }, [quantity, selectedStock]);

  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <Details selectedStock={selectedStock} theme={theme} />
      </div>
      <div className="flex flex-col  md:flex-row justify-between items-center gap-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          <div>
            <p className="font-semibold mb-1">Symbol</p>
            <select
              value={selectedSymbol}
              onChange={(e) => setSelectedSymbol(e.target.value)}
              className={`p-1.5 border rounded-md mt-2 
              ${theme === "dark" ? "bg-black" : "bg-gray-100"}`}
            >
              {stocksData?.data?.map((item, index) => (
                <option
                  key={index}
                  value={item.symbol}
                  className={`text-sm ${
                    theme === "dark"
                      ? "bg-black text-white"
                      : "bg-white text-black"
                  }`}
                >
                  {item.symbol}
                </option>
              ))}
            </select>
          </div>

          <InputField
            label="Price"
            type="number"
            theme={theme}
            value={selectedStock?.current_price || ""}
            onChange={() => {}}
          />
          <InputField
            label="Quantity"
            type="number"
            min="0"
            theme={theme}
            value={quantity}
            onChange={(e) => {
              const value = e.target.value;
              if (value === "" || parseInt(value) >= 0) {
                setQuantity(value);
              }
            }}
          />
          <InputField
            label="Transaction fee"
            type="number"
            theme={theme}
            value={transactionfee}
            onChange={() => {}}
          />
          <InputField
            label="Sub Total"
            type="number"
            theme={theme}
            value={subTotal}
            onChange={() => {}}
          />
          <InputField
            label="Total"
            type="number"
            theme={theme}
            value={total}
            onChange={() => {}}
          />
        </div>
        <div className="">
          <button
            onClick={handleSubmit}
            className={`flex items-center gap-2 transition font-medium rounded-md py-2 px-4 shadow-md bg-purple-button text-white
            ${
              !selectedStock ||
              !quantity ||
              isNaN(quantity) ||
              Number(quantity) <= 0
                ? " cursor-not-allowed"
                : "cursor-pointer"
            }
          `}
            disabled={
              !selectedStock ||
              !quantity ||
              isNaN(quantity) ||
              Number(quantity) <= 0
            }
          >
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyStockPage;
