import React, { useState, useEffect } from 'react';
import { useStocks } from '../../../hooks/stockshooks/useStocks';

function IPOForm({ form, errors, onChange, onSubmit, onCancel, editPrice, theme, title }) {
  const { data } = useStocks({ searchSymbol: "", pageNumber: 1, per_page: 5000 });
  const [stockOptions, setStockOptions] = useState([]);
  const [listingDate, setListingDate] = useState(form.listingDate || '');
  const [openDateTime, setOpenDateTime] = useState(form.openDateTime || '');
  const [closeDateTime, setCloseDateTime] = useState(form.closeDateTime || '');

  useEffect(() => {
    if (data) {
      const formattedStockOptions = data?.data?.map((stock) => ({
        id: stock.id,
        symbol: stock.symbol,
        company_name: stock.company_name,
      }));
      setStockOptions(formattedStockOptions);
    }
  }, [data]);

  const handleStockChange = (e) => {
    const { name, value } = e.target;
    onChange(e); 
    if (name === 'stockSymbol') {
      setListingDate('');
    }
  };

  // Handling form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      stockSymbol: form.stockSymbol,
      openDateTime: openDateTime,
      closeDateTime: closeDateTime,
      listingDate: listingDate,
      totalShares: form.totalShares,
      issuePrice: form.issuePrice,
    };

    onSubmit(formData); // Send formData to the parent component or API
  };

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
            {editPrice ? `Update ${title}` : `Add ${title}`}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Stock Symbol
              </label>
              <select
                name="stockSymbol"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={handleStockChange}
                value={form.stockSymbol}
                required
              >
                <option value="">Select a Stock</option>
                {stockOptions.map((stock) => (
                  <option key={stock.id} value={stock.symbol}>
                    {stock.symbol} - {stock.company_name}
                  </option>
                ))}
              </select>
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
                Open Date and Time
              </label>
              <input
                type="datetime-local"
                name="openDateTime"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={(e) => setOpenDateTime(e.target.value)}
                value={openDateTime}
                required
              />
              {errors.openDateTime && (
                <p className="text-red-500 text-sm mt-1">{errors.openDateTime}</p>
              )}
            </div>

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Close Date and Time
              </label>
              <input
                type="datetime-local"
                name="closeDateTime"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={(e) => setCloseDateTime(e.target.value)}
                value={closeDateTime}
                required
              />
              {errors.closeDateTime && (
                <p className="text-red-500 text-sm mt-1">{errors.closeDateTime}</p>
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

            <div>
              <label
                className={`block text-sm font-medium ${
                  theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                }`}
              >
                Listing Date and Time
              </label>
              <input
                type="datetime-local"
                name="listingDate"
                className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                  theme === 'dark'
                    ? 'bg-gray-700 border-gray-600 text-gray-200'
                    : 'border-gray-300 text-gray-800'
                }`}
                onChange={(e) => setListingDate(e.target.value)}
                value={listingDate}
                required
              />
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
                {editPrice ? `Update ${title}` : `Add ${title}`}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default IPOForm;
