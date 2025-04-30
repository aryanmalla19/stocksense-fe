import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import BuyStockPage from "./BuyStockPage";
import { FaUser, FaEnvelope } from "react-icons/fa";
import useUserDetails from "../../hooks/auth/useUserDetails";
import { useStocks } from "../../hooks/stocks/useStocks";
import useBuySell from "../../hooks/ipo/useBuySell";

const BuySellPage = () => {
  const { userDetails } = useUserDetails();
  const { theme } = useContext(ThemeContext);
  const { data: stocksData } = useStocks({
    searchSymbol: "",
    pageNumber: 1,
    per_page: 100000,
  });

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
    <div className={`min-h-screen p-6 ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"} transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 flex items-center gap-3">
          <span className="text-[#FB8122]">📈</span> Buy Stocks
        </h1>

        <div className={`rounded-2xl shadow-xl overflow-hidden ${theme === "dark" ? "bg-gray-800" : "bg-white"} transition-all duration-300 hover:shadow-2xl`}>
          {/* User Info Section */}
          <div className="p-8 flex flex-col sm:flex-row justify-between items-start gap-6">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FB8122]/10 rounded-full">
                <FaUser className="text-[#FB8122] text-xl" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-500">Client Name</h2>
                <p className="text-lg font-medium">{userDetails?.data?.name || "N/A"}</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#FB8122]/10 rounded-full">
                <FaEnvelope className="text-[#FB8122] text-xl" />
              </div>
              <div>
                <h2 className="text-sm font-semibold text-gray-500">Client Email</h2>
                <p className="text-lg font-medium">{userDetails?.data?.email || "N/A"}</p>
              </div>
            </div>
          </div>

          {/* Divider */}
          <hr className={`border ${theme === "dark" ? "border-gray-700" : "border-gray-200"}`} />

          {/* Buy Stock Section */}
          <div className="p-8">
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
      </div>
    </div>
  );
};

export default BuySellPage;