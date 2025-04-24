// src/components/StockList.jsx
import React from 'react';
import StockRow from './StockRow';

function StockList({ stocks, onAdd, onEdit, theme }) {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-[#9E15BF]">Stocks</h2>
        <button
          onClick={onAdd}
          className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
        >
          Add New Stock
        </button>
      </div>
      <div className="overflow-x-auto">
        <div
          className="grid grid-cols-5 bg-[#9E15BF]  text-white font-semibold p-2 rounded-md"
        >
          <p>Symbol</p>
          <p>Company Name</p>
          <p>Sector</p>
          <p>Description</p>
          <p>Actions</p>
        </div>
        {stocks.map((stock, index) => (
          <StockRow key={index} stock={stock} onEdit={onEdit} theme={theme} />
        ))}
      </div>
    </div>
  );
}

export default StockList;