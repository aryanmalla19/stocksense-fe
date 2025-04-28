import React from "react";
import IPORow from "./IPORow";

function IPOList({ prices, onAdd, onEdit, theme }) {
  return (
    <div className="mb-8">
      <div className="text-right mb-4">
        <button
          onClick={onAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add New IPO
        </button>
      </div>
      <div className="overflow-x-auto">
        <div className="grid grid-cols-9 bg-[#9E15BF] text-white font-semibold p-2 rounded-md mb-3">
          <p className="col-span-2">Company Name</p>
          <p>Open Time</p>
          <p>Close Time</p>
          <p>Listing Time</p>
          <p> Shares</p>
          <p>Issue Price</p>
          <p>Status</p>
          <p>Actions</p>
        </div>
        {prices?.map((price, index) => (
          <IPORow
            key={price.stockSymbol + index}
            price={price}
            onEdit={onEdit}
            theme={theme}
          />
        ))}
      </div>
    </div>
  );
}

export default IPOList;
