import React, { useState, useContext } from 'react';
import { ThemeContext } from '../../context/ThemeContext'; // Assuming ThemeContext is available

function IpoManagement() {
  const { theme = 'light' } = useContext(ThemeContext) || {}; // Fallback to 'light' if ThemeContext is undefined
  const [showForm, setShowForm] = useState(false);
  const [editPrice, setEditPrice] = useState(null);
  const [form, setForm] = useState({
    stockSymbol: '',
    openTime: '',
    closeTime: '',
    totalShares: '',
    issuePrice: '',
  });
  const [errors, setErrors] = useState({});

  const handleEdit = (price) => {
    setEditPrice(price);
    setForm({
      stockSymbol: price.stockSymbol,
      openTime: price.openTime,
      closeTime: price.closeTime,
      totalShares: price.totalShares.toString(),
      issuePrice: price.issuePrice.toString(),
    });
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditPrice(null);
    setForm({
      stockSymbol: '',
      openTime: '',
      closeTime: '',
      totalShares: '',
      issuePrice: '',
    });
    setErrors({});
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'stockSymbol' ? value.toUpperCase() : value,
    }));
  };

  const validateTimeRange = (time) => {
    if (!time) return false;
    const min = new Date('1970-01-01T10:00');
    const max = new Date('1970-01-01T17:00');
    const current = new Date(`1970-01-01T${time}`);
    return current >= min && current <= max;
  };

  const validateTime = (start, end) => {
    if (!start || !end) return false;
    return new Date(`1970-01-01T${end}`) > new Date(`1970-01-01T${start}`);
  };

  const validateForm = () => {
    const newErrors = {};

    if (!form.stockSymbol || !/^[A-Z]+$/.test(form.stockSymbol)) {
      newErrors.stockSymbol = 'Stock symbol must contain only letters.';
    }

    if (!form.openTime || !validateTimeRange(form.openTime)) {
      newErrors.openTime = 'Open time must be between 10:00 AM and 5:00 PM.';
    }
    if (!form.closeTime || !validateTimeRange(form.closeTime)) {
      newErrors.closeTime = 'Close time must be between 10:00 AM and 5:00 PM.';
    }

    if (!newErrors.closeTime && !validateTime(form.openTime, form.closeTime)) {
      newErrors.closeTime = 'Close time must be after open time.';
    }

    if (!form.totalShares || !/^\d+$/.test(form.totalShares)) {
      newErrors.totalShares = 'Total shares must be a positive number.';
    }

    if (!form.issuePrice || !/^\d+(\.\d{1,2})?$/.test(form.issuePrice)) {
      newErrors.issuePrice = 'Issue price must be a valid number with up to 2 decimal places.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form is valid:', form);
      handleCancel();
    }
  };

  const samplePrices = [
    {
      stockSymbol: 'AAPL',
      openTime: '10:00',
      closeTime: '15:00',
      totalShares: 1000000,
      issuePrice: 150.00,
    },
    {
      stockSymbol: 'GOOGL',
      openTime: '10:30',
      closeTime: '16:00',
      totalShares: 500000,
      issuePrice: 135.50,
    },
    {
      stockSymbol: 'MSFT',
      openTime: '11:00',
      closeTime: '14:30',
      totalShares: 750000,
      issuePrice: 200.75,
    },
    {
      stockSymbol: 'AMZN',
      openTime: '10:15',
      closeTime: '15:45',
      totalShares: 600000,
      issuePrice: 175.20,
    },
    {
      stockSymbol: 'TSLA',
      openTime: '10:45',
      closeTime: '16:15',
      totalShares: 800000,
      issuePrice: 250.00,
    },
    {
      stockSymbol: 'FB',
      openTime: '11:30',
      changePassword: '15:30',
      totalShares: 400000,
      issuePrice: 120.00,
    },
    {
      stockSymbol: 'NVDA',
      openTime: '10:00',
      closeTime: '14:00',
      totalShares: 900000,
      issuePrice: 180.90,
    },
    {
      stockSymbol: 'JPM',
      openTime: '11:15',
      closeTime: '16:30',
      totalShares: 300000,
      issuePrice: 95.25,
    },
    {
      stockSymbol: 'V',
      openTime: '10:20',
      closeTime: '15:20',
      totalShares: 450000,
      issuePrice: 110.30,
    },
    {
      stockSymbol: 'WMT',
      openTime: '11:45',
      closeTime: '16:45',
      totalShares: 700000,
      issuePrice: 140.60,
    },
  ];

  return (
    <div className="mx-auto p-4 relative">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 text-[#9E15BF]">
        <h1 className="text-2xl md:text-3xl font-bold py-2">IPO Management</h1>
      </div>

      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gray-800 border border-gray-800 shadow-md shadow-black/30'
            : 'bg-white border border-gray-200 shadow-md shadow-gray-300'
        }`}
      >
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold text-[#9E15BF]">IPO Details</h2>
            <button
              onClick={() => setShowForm(true)}
              className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700"
            >
              Add New Stock
            </button>
          </div>
          <div className="overflow-x-auto max-h-96 overflow-y-auto">
            <div
              className={`grid grid-cols-6 bg-purple-600 text-white font-semibold p-2 rounded-md`}
            >
              <p>Stock Symbol</p>
              <p>Open Time</p>
              <p>Close Time</p>
              <p>Total Shares</p>
              <p>Issue Price</p>
              <p>Actions</p>
            </div>
            {samplePrices.map((price, index) => (
              <div
                key={price.stockSymbol + index}
                className={`grid grid-cols-6 gap-2 py-2 px-2 my-2 rounded-md ${
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
                    onClick={() => handleEdit(price)}
                    className="text-blue-500 hover:underline mr-2"
                  >
                    Edit
                  </button>
                  <button className="text-red-500 hover:underline">Delete</button>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showForm && (
        <>
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-30" onClick={handleCancel}></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <div
              className={`relative bg-white rounded-lg shadow-lg w-full max-w-md p-6 ${
                theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold text-[#9E15BF]">
                  {editPrice ? 'Edit Stock' : 'Add Stock'}
                </h2>
                <button
                  onClick={handleCancel}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label
                    className={`block text-sm font-medium ${
                      theme === 'dark' ? 'text-gray-200' : 'text-gray-600'
                    } mb-1`}
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
                    onChange={handleChange}
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
                    } mb-1`}
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
                    onChange={handleChange}
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
                    } mb-1`}
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
                    onChange={handleChange}
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
                    } mb-1`}
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
                    onChange={handleChange}
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
                    } mb-1`}
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
                    onChange={handleChange}
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
                    onClick={handleCancel}
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
      )}
    </div>
  );
}

export default IpoManagement;