import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BuyStockPage from "./BuyStockPage";
import OrderBook from "./OrderBook";
import useUserDetails from "../../hooks/authhooks/useUserDetails";
import { useStocks } from "../../hooks/stockshooks/useStocks";
import useBuySell from "../../hooks/ipohooks/useBuySell";

const BuySellPage = () => {
  const { userDetails } = useUserDetails();
  const { theme } = useContext(ThemeContext);
  const { data: stocksData } = useStocks("", "", "");

  const [selectedSymbol, setSelectedSymbol] = useState("");
  const [quantity, setQuantity] = useState("");

  const { buySellData } = useBuySell();

  const selectedStock = stocksData?.data?.find(
    (stock) => stock.symbol === selectedSymbol
  );

  const handleSubmit = async () => {
    const payload = {
      stock_id: selectedStock?.id,
      type: "buy",
      quantity: Number(quantity),
    };
    buySellData(payload);
  };

  return (
    <div
      className={`rounded-md ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
    >
      <div className="flex justify-between px-10 py-3 items-center ">
        <div className="flex gap-20 items-center">
          <div>
            <h2 className="font-semibold text-[18px]">Client Name</h2>
            <p className="text-gray-400">{userDetails?.data?.name}</p>
          </div>
          <div>
            <h2 className="font-semibold text-[18px]">Client Email</h2>
            <p className="text-gray-400">{userDetails?.data?.email}</p>
          </div>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="bg-teal-700 text-white rounded-md p-1 px-3 mr-3"
            disabled={!selectedStock || !quantity}
          >
            Buy
          </button>
          <button className="bg-red-500 text-white rounded-md p-1 px-3">
            Cancel
          </button>
        </div>
      </div>
      <hr
        className={`border ${
          theme === "dark" ? "border-gray-600" : "border-gray-200"
        } `}
      />
      <div className="px-10 py-5">
        <BuyStockPage
          theme={theme}
          stocksData={stocksData}
          selectedSymbol={selectedSymbol}
          setSelectedSymbol={setSelectedSymbol}
          quantity={quantity}
          setQuantity={setQuantity}
        />
      </div>
      <div>
        <OrderBook theme={theme} />
      </div>
    </div>
  );
};

export default BuySellPage;
