import React from "react";
import Details from "./Details";

const InputField = ({ label, type, theme, value, onChange }) => {
  return (
    <div>
      <p className="font-semibold mb-1">{label}</p>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`p-1.5 w-24 rounded-md mt-2 
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
}) => {
  const selectedStock = stocksData?.data?.find(
    (stock) => stock.symbol === selectedSymbol
  );

  return (
    <div className="flex flex-col">
      <div className="mb-5">
        <Details selectedStock={selectedStock} theme={theme} />
      </div>
      <div className="flex flex-col gap-6 md:flex-row">
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
          theme={theme}
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
        />
      </div>
    </div>
  );
};

export default BuyStockPage;
