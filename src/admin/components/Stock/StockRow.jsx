// src/admin/components/StockRow.jsx
import React from 'react';

function StockRow({ stock, onEdit, theme }) {
  return (
    <div
      className={`grid grid-cols-5 gap-2 py-2 px-2 my-2 rounded-md ${
        theme === 'dark'
          ? 'text-gray-200 hover:bg-gray-700'
          : 'hover:bg-gray-100 text-gray-900'
      }`}
    >
      <p>{stock.symbol}</p>
      <p>{stock.company_name}</p>
      <p>{stock.sector}</p>
      <p>{stock.description}</p>
      <p>
        <button
          onClick={() => onEdit(stock)}
          className="text-blue-500 hover:underline mr-2"
        >
          Edit
        </button>
        <button className="text-red-500 hover:underline">Delete</button>
      </p>
    </div>
  );
}

export default StockRow;