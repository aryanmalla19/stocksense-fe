import React, { useState } from "react";
import toast from "react-hot-toast";
import useBuySell from "../../hooks/ipohooks/useBuySell";

const ConfirmSellPage = ({ onClose, theme, stockID, quantity }) => {
  const [currentPrice, setCurrentPrice] = useState("");
  const [userInputQuantity, setUserInputQuantity] = useState();

  const { buySellData } = useBuySell();

  const handleSubmit = (e) => {
    e.preventDefault();
    const parsedQuantity = parseInt(userInputQuantity, 10);

    if (parsedQuantity > quantity) {
      toast.error("Insufficient quantity");
      return;
    }

    onClose();

    const payload = {
      stock_id: stockID,
      type: "sell",
      quantity: parsedQuantity,
    };

    buySellData(payload);
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-lg shadow-lg ${
        theme === "dark" ? "bg-dark-bg text-dark-text" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Sell Stocks</h3>
        <button
          onClick={onClose}
          className={`p-1 rounded-full ${
            theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Current Price
          </label>
          <input
            type="text"
            value={currentPrice}
            onChange={(e) => setCurrentPrice(e.target.value)}
            className={`w-full p-2 border rounded ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Quantity</label>
          <input
            type="number"
            value={userInputQuantity}
            onChange={(e) => setUserInputQuantity(e.target.value)}
            className={`w-full p-2 border rounded ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
            required
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 flex items-center justify-center gap-2"
          >
            Sell
          </button>
        </div>
      </form>
    </div>
  );
};

export default ConfirmSellPage;
