import React from "react";

const Details = ({ selectedStock, theme, isToggled, handleSubmit }) => {
  return (
    <div
      className={`font-semibold p-4 rounded ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="flex justify-between text-center">
        <div className="flex gap-12 text-center">
          <div className="flex flex-col">
            <p>Current Price</p>
            <p>{selectedStock?.current_price ?? "--"}</p>
          </div>
          <div className="flex flex-col">
            <p>Open Price</p>
            <p>{selectedStock?.open_price ?? "--"}</p>
          </div>
          <div className="flex flex-col">
            <p>Close Price</p>
            <p>{selectedStock?.close_price ?? "--"}</p>
          </div>
          <div className="flex flex-col">
            <p>High Price</p>
            <p>{selectedStock?.high_price ?? "--"}</p>
          </div>
          <div className="flex flex-col">
            <p>Low Price</p>
            <p>{selectedStock?.low_price ?? "--"}</p>
          </div>
        </div>

        <div>
          <button
            onClick={handleSubmit}
            className="bg-teal-700 text-white rounded-md p-1 px-3 mr-3"
          >
            {isToggled ? "Sell" : "Buy"}
          </button>
          <button className="bg-red-500 text-white rounded-md p-1 px-3">
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default Details;
