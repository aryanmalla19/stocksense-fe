// src/admin/components/IPOForm.jsx
import React from 'react';

function IPOForm({ form, errors, onChange, onSubmit, onCancel, editPrice, theme }) {
  return (
    <>
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-30"
        onClick={onCancel}
      ></div>
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className={`w-full max-w-md p-6 rounded-lg ${
            theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
          }`}
        >
          <h2 className="text-xl font-semibold text-[#9E15BF] mb-4">
            {editPrice ? 'Edit Stock' : 'Add Stock'}
          </h2>
          <form className="space-y-4" onSubmit={onSubmit}>
            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Stock Symbol
              </label>
              <input
                type="text"
                name="stockSymbol"
                placeholder="e.g. AAPL"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={onChange}
                value={form.stockSymbol}
                required
              />
              {errors.stockSymbol && (
                <p className="text-red-500 text-sm mt-1">{errors.stockSymbol}</p>
              )}
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Open Time
              </label>
              <input
                type="time"
                name="openTime"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={onChange}
                value={form.openTime}
                required
              />
              {errors.openTime && (
                <p className="text-red-500 text-sm mt-1">{errors.openTime}</p>
              )}
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Close Time
              </label>
              <input
                type="time"
                name="closeTime"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={onChange}
                value={form.closeTime}
                required
              />
              {errors.closeTime && (
                <p className="text-red-500 text-sm mt-1">{errors.closeTime}</p>
              )}
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Total Shares
              </label>
              <input
                type="number"
                name="totalShares"
                placeholder="e.g. 1000000"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={onChange}
                value={form.totalShares}
                required
              />
              {errors.totalShares && (
                <p className="text-red-500 text-sm mt-1">{errors.totalShares}</p>
              )}
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Issue Price
              </label>
              <input
                type="number"
                name="issuePrice"
                step="0.01"
                placeholder="e.g. 150.00"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={onChange}
                value={form.issuePrice}
                required
              />
              {errors.issuePrice && (
                <p className="text-red-500 text-sm mt-1">{errors.issuePrice}</p>
              )}
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={onCancel}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none"
              >
                {editPrice ? 'Update Stock' : 'Add Stock'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default IPOForm;