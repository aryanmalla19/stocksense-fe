import React, { useEffect, useState } from 'react';
import { getSectors } from '../../../api/stocksApiService';

function StockForm({ stock, onCancel, onSave, theme }) {
  const [sectors, setSectors] = useState([]);
  const [loadingSectors, setLoadingSectors] = useState(true);

  useEffect(() => {
    async function fetchSectors() {
      try {
        const data = await getSectors();
        setSectors(data || []);
      } catch (error) {
        console.error('Error fetching sectors:', error);
      } finally {
        setLoadingSectors(false);
      }
    }
    fetchSectors();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const newStock = {
      symbol: formData.get('symbol'),
      company_name: formData.get('company_name'),
      sector_id: formData.get('sector_id'), 
      description: formData.get('description'),
    };
    onSave(newStock);
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-30"
        onClick={onCancel}
      ></div>

      <div className="fixed inset-0 flex items-center justify-center z-40">
        <div
          className={`w-full max-w-lg p-6 rounded-lg shadow-lg transition-all duration-300 ${
            theme === 'dark'
              ? 'bg-gray-800 border-gray-700 text-gray-200'
              : 'bg-white border-gray-200 text-gray-900'
          }`}
        >
          <h2 className="text-xl font-semibold mb-4 text-[#9E15BF]">
            {stock ? 'Edit Stock' : 'Add Stock'}
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Symbol:
              </label>
              <input
                type="text"
                name="symbol"
                defaultValue={stock?.symbol || ''}
                required
                className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-200'
                    : 'border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Company Name:
              </label>
              <input
                type="text"
                name="company_name"
                defaultValue={stock?.company_name || ''}
                required
                className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-200'
                    : 'border-gray-300 text-gray-900'
                }`}
              />
            </div>

            <div>
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Sector:
              </label>
              {loadingSectors ? (
                <div className="text-sm text-gray-500">Loading sectors...</div>
              ) : (
                <select
                  name="sector_id"
                  defaultValue={stock?.sector_id || ''}
                  required
                  className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                    theme === 'dark'
                      ? 'bg-gray-800 border-gray-700 text-gray-200'
                      : 'border-gray-300 text-gray-900'
                  }`}
                >
                  <option value="">Select Sector</option>
                  {sectors.map((sector) => (
                    <option key={sector.id} value={sector.id}>
                      {sector.name}
                    </option>
                  ))}
                </select>
              )}
            </div>

            <div>
              <label className={`block text-sm font-medium ${theme === 'dark' ? 'text-gray-200' : 'text-gray-700'}`}>
                Description:
              </label>
              <textarea
                name="description"
                defaultValue={stock?.description || ''}
                cols={10}
                rows={5}
                className={`mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500 sm:text-sm ${
                  theme === 'dark'
                    ? 'bg-gray-800 border-gray-700 text-gray-200'
                    : 'border-gray-300 text-gray-900'
                }`}
              ></textarea>
            </div>
              
            <div className="flex space-x-4">
              <button
                type="submit"
                className="bg-[#9E15BF] text-white px-4 py-2 rounded-md hover:bg-purple-700"
              >
                Save
              </button>
              <button
                type="button"
                onClick={onCancel}
                className="bg-gray-500 text-white px-4 py-2 rounded-md hover:bg-gray-600"
              >
                Cancel
              </button>
            </div>

          </form>
        </div>
      </div>
    </>
  );
}

export default StockForm;
