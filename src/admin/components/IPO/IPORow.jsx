// src/admin/components/IPORow.jsx
import React from 'react';

function IPORow({ price, onEdit, theme }) {
  return (
    <div
      className={`grid grid-cols-8 py-2 px-2 rounded-md ${
        theme === 'dark'
          ? 'text-gray-200 hover:bg-gray-700'
          : 'hover:bg-gray-100 text-gray-800'
      }`}
    >
      <p>{price.company_name}</p>
      <p>{price.open_date}</p>
      <p>{price.close_date}</p>
      <p>{price.listing_date}</p>
      <p>{price.total_shares}</p>
      <p>${price.issue_price}</p>
      <p>{price.ipo_status}</p>
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