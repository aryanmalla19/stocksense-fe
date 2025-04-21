import React, { useState } from "react";
import { useStocks } from "../../hooks/stockshooks/useStocks";
import Details from "./Details";
import useBuySell from "../../hooks/ipohooks/useBuySell";

const InputField = ({ label, type, theme, value, onChange }) => {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-1.5 w-24 border rounded-md mt-2 
              ${
                theme === "dark"
                  ? "bg-black text-white border-gray-700"
                  : "bg-white text-black border-gray-200"
              }`}
      />
    </div>
  );
};

const BuyStockPage = ({ isToggled, theme }) => {
  const { data } = useStocks("", "", "");
  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [quantity, setQuantity] = useState("");
  const { buySellData } = useBuySell();
  console.log(buySellData);

  const handleChange = (e) => {
    setSelectedSymbol(e.target.value);
  };

  const selectedStock = data?.data?.find(
    (stock) => stock.symbol === selectedSymbol
  );

  const handleSubmit = () => {
    if (!selectedStock) return;

    const payload = {
      stock_id: selectedStock.id,
      type: isToggled ? "sell" : "buy",
      quantity: parseInt(quantity),
    };

    console.log("Submitting payload: ", payload);
    buySellData(payload);
  };

  return (
    <div className="flex flex-col">
      <div className="flex flex-col gap-6 md:flex-row">
        <div>
          <p className="font-semibold mb-1">Symbol</p>
          <select
            value={selectedSymbol}
            onChange={handleChange}
            className={`p-1.5 border rounded-md mt-2 
              ${
                theme === "dark"
                  ? "bg-black text-white border-gray-700"
                  : "bg-white text-black border-gray-200"
              }`}
          >
            {data?.data?.map((item, index) => (
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
          value={selectedStock?.current_price}
        />
        <InputField
          label="Quantity"
          type="number"
          theme={theme}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
      <div className="mt-4">
        <Details
          handleSubmit={handleSubmit}
          selectedStock={selectedStock}
          theme={theme}
          isToggled={isToggled}
        />
      </div>
    </div>
  );
};

export default BuyStockPage;
