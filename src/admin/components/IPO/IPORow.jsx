// src/admin/components/IPORow.jsx
import React from 'react';

function IPORow({ price, onEdit, theme }) {
  return (
    <div
      className={`grid grid-cols-6 py-2 px-2 rounded-md ${
        theme === 'dark'
          ? 'text-gray-200 hover:bg-gray-700'
          : 'hover:bg-gray-100 text-gray-800'
      }`}
    >
      <p>{price.stockSymbol}</p>
      <p>{price.openTime}</p>
      <p>{price.closeTime}</p>
      <p>{price.totalShares.toLocaleString()}</p>
      <p>${price.issuePrice.toFixed(2)}</p>
      <p>
        <button
          onClick={() => onEdit(price)}
          className="text-blue-500 hover:underline mr-2"
        >
          Edit
        </button>
        <button className="text-red-500 hover:underline">Delete</button>
      </p>
    </div>
  );
}

export default IPORow;