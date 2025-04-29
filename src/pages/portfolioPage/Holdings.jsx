import React, { useContext, useState } from "react";
import useGetHoldings from "../../hooks/ipohooks/useGetHoldings";
import { ThemeContext } from "../../context/ThemeContext";
import useBuySell from "../../hooks/ipohooks/useBuySell";
import { FaSellcast } from "react-icons/fa";
import ConfirmSellPage from "./ConfirmSellPage";

const Holdings = () => {
  const { theme } = useContext(ThemeContext);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState(null);

  const { data, refetch } = useGetHoldings();
  const holdings = data?.data || [];

  const { buySellData } = useBuySell();

  const handleSell = async (stockId, quantity) => {
    const payload = {
      stock_id: stockId,
      type: "sell",
      quantity: quantity,
    };

    try {
      await buySellData(payload);
      setIsModalOpen(false);
      await refetch(); // Refresh holdings after successful sell
    } catch (error) {
      console.error("Sell failed:", error);
    }
  };

  const openSellModal = (stock) => {
    setSelectedStock(stock);
    setIsModalOpen(true);
  };

  return (
    <div>
      {/* Modal for Confirm Sell */}
      {isModalOpen && selectedStock && (
        <>
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-sm z-30"></div>
          <ConfirmSellPage
            onClose={() => setIsModalOpen(false)}
            theme={theme}
            stockID={selectedStock.stock_id}
            quantity={selectedStock.quantity}
            onSell={handleSell}
          />
        </>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8">
        <h1 className="text-2xl md:text-3xl font-bold py-2">Your Holdings</h1>
      </div>

      {/* Holdings Table */}
      <div
        className={`outlet-container rounded-md p-8 h-120 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        {/* Table Header */}
        <div className="grid grid-cols-6 bg-purple-button text-white font-semibold p-2 rounded-md">
          <p>Company</p>
          <p>Symbol</p>
          <p>Quantity</p>
          <p>Avg. Price (Rs)</p>
          <p>Investment (Rs)</p>
          <p>Action</p>
        </div>

        {/* Table Rows */}
        {holdings.length === 0 ? (
          <p className="text-center mt-4 text-gray-500">No holdings found.</p>
        ) : (
          holdings.map((item, index) => {
            const investment = item.quantity * item.average_price;

            return (
              <div
                key={index}
                className={`grid grid-cols-6 gap-2 py-2 px-2 my-2 rounded-md ${
                  theme === "dark"
                    ? "text-dark-text hover:bg-gray-700"
                    : "hover:bg-gray-100 text-light-text"
                }`}
              >
                <p>{item.stock.company_name}</p>
                <p>{item.stock.symbol}</p>
                <p>{Number(item.quantity).toFixed(2)}</p>
                <p>{Number(item.average_price).toFixed(2)}</p>
                <p>{Number(investment).toFixed(2)}</p>

                <button
                  onClick={() => openSellModal(item)}
                  className="flex items-center gap-2 justify-center rounded-md p-2 bg-[#5626C4] text-white w-24 transition-all"
                >
                  <FaSellcast /> Sell
                </button>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Holdings;
