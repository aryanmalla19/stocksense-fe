import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Assuming ThemeContext is available

function StockManagemant() {
  const { theme } = useContext(ThemeContext); // Use theme context for dark/light mode
  const [showForm, setShowForm] = useState(false);
  const [editStock, setEditStock] = useState(null);

  const handleEdit = (stock) => {
    setEditStock(stock);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditStock(null);
  };

  const sampleStock = {
    symbol: 'AAPL',
    companyName: 'Apple Inc.',
    sector: 'Technology',
    isListed: true,
    description: 'A multinational technology company.',
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 text-[#9E15BF]">
        <h1 className="text-2xl md:text-3xl font-bold py-2">Stock Management</h1>
      </div>

      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-dark-bg border border-dark-bg shadow-md shadow-black/30'
            : 'bg-white border border-gray-200 shadow-md shadow-gray-300'
        }`}
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#9E15BF]">Stocks</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-purple-button text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Add New Stock
            </button>
          </div>
          <div className="overflow-x-auto">
            <div
              className={`grid grid-cols-6 bg-purple-button text-white font-semibold p-2 rounded-md`}
            >
              <p>Symbol</p>
              <p>Company Name</p>
              <p>Sector</p>
              <p>Listed</p>
              <p>Description</p>
              <p>Actions</p>
            </div>
            <div
              className={`grid grid-cols-6 gap-2 py-2 px-2 my-2 rounded-md ${
                theme === 'dark'
                  ? 'text-dark-text hover:bg-gray-700'
                  : 'hover:bg-gray-100 text-light-text'
              }`}
            >
              <p>{sampleStock.symbol}</p>
              <p>{sampleStock.companyName}</p>
              <p>{sampleStock.sector}</p>
              <p>{sampleStock.isListed ? 'Yes' : 'No'}</p>
              <p>{sampleStock.description}</p>
              <p>
                <button
                  onClick={() => handleEdit(sampleStock)}
                  className="text-blue-500 hover:underline mr-2"
                >
                  Edit
                </button>
                <button className="text-red-500 hover:underline">Delete</button>
              </p>
            </div>
          </div>
        </div>

        {showForm && (
          <div className="mb-8">
            <h2 className="text-xl font-semibold mb-4 text-[#9E15BF]">
              {editStock ? 'Edit Stock' : 'Add Stock'}
            </h2>
            <form className="space-y-4">
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-dark-text' : 'text-gray-700'
                  }`}
                >
                  Symbol:
                </label>
                <input
                  type="text"
                  name="symbol"
                  defaultValue={editStock?.symbol || ''}
                  className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-dark-bg border-dark-bg text-dark-text'
                      : 'border-gray-300 text-light-text'
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-dark-text' : 'text-gray-700'
                  }`}
                >
                  Company Name:
                </label>
                <input
                  type="text"
                  name="company_name"
                  defaultValue={editStock?.companyName || ''}
                  className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-dark-bg border-dark-bg text-dark-text'
                    : 'border-gray-300 text-light-text'
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-dark-text' : 'text-gray-700'
                  }`}
                >
                  Sector ID:
                </label>
                <input
                  type="text"
                  name="sector_id"
                  defaultValue={editStock?.sector || ''}
                  className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-dark-bg border-dark-bg text-dark-text'
                      : 'border-gray-300 text-light-text'
                  }`}
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-dark-text' : 'text-gray-700'
                  }`}
                >
                  Listed:
                </label>
                <input
                  type="checkbox"
                  name="is_listed"
                  defaultChecked={editStock?.isListed || false}
                  className="mt-1"
                />
              </div>
              <div>
                <label
                  className={`block text-sm font-medium ${
                    theme === 'dark' ? 'text-dark-text' : 'text-gray-700'
                  }`}
                >
                  Description:
                </label>
                <textarea
                  name="description"
                  defaultValue={editStock?.description || ''}
                  className={`mt-1 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-dark-bg border-dark-bg text-dark-text'
                      : 'border-gray-300 text-light-text'
                  }`}
                ></textarea>
              </div>
              <div className="flex space-x-4">
                <button
                  type="submit"
                  className="bg-purple-button text-white px-4 py-2 rounded-md hover:bg-purple-700"
                >
                  Save
                </button>
                <button
                  type="button"
                  onClick={handleCancel}
                  className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default StockManagemant;