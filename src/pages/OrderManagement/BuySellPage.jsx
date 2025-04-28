import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BuyStockPage from "./BuyStockPage";
import { FaUser, FaEnvelope } from "react-icons/fa";
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
    <>
      <div className="flex justify-between items-center mb-6 mx-6  mt-5">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          Buy Stocks
        </h1>
      </div>

      <div
        className={`outlet-container rounded-md shadow-lg mx-6 mb-8 ${
          theme === "dark"
            ? "bg-dark-bg text-dark-text"
            : "bg-white text-gray-600"
        }`}
      >
        <div className="flex justify-between px-10 py-6 items-start flex-wrap gap-y-4">
          <div className="flex flex-col sm:flex-row gap-12">
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <FaUser className="text-[#FB8122]" />
                Client Name
              </h2>
              <p className=" text-sm">{userDetails?.data?.name}</p>
            </div>
            <div>
              <h2 className="font-semibold text-lg flex items-center gap-2">
                <FaEnvelope className="text-[#FB8122]" />
                Client Email
              </h2>
              <p className=" text-sm">{userDetails?.data?.email}</p>
            </div>
          </div>
        </div>

        <hr
          className={`border ${
            theme === "dark" ? "border-gray-700" : "border-gray-300"
          }`}
        />

        <div className="px-10 py-6">
          <BuyStockPage
            theme={theme}
            stocksData={stocksData}
            selectedSymbol={selectedSymbol}
            setSelectedSymbol={setSelectedSymbol}
            quantity={quantity}
            setQuantity={setQuantity}
            handleSubmit={handleSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default BuySellPage;
