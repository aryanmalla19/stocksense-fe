import React from 'react';

const PortfolioFilters = ({ filters, setFilters }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  return (
    <div className="mb-6 flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
      <input
        type="text"
        name="userSearch"
        value={filters.userSearch}
        onChange={handleChange}
        placeholder="Search by user name or email"
        className="border border-gray-300 p-2 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-purple-500"
      />
      <select
        name="performanceSort"
        value={filters.performanceSort}
        onChange={handleChange}
        className="border border-gray-300 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
      >
        <option value="">Sort by Performance</option>
        <option value="high">High to Low</option>
        <option value="low">Low to High</option>
      </select>
      <label className="flex items-center space-x-2">
        <input
          type="checkbox"
          name="activeTraders"
          checked={filters.activeTraders}
          onChange={handleChange}
          className="h-5 w-5 text-purple-600 focus:ring-purple-500"
        />
        <span className="text-gray-700">Active Traders (Last 7 Days)</span>
      </label>
    </div>
  );
};

export default PortfolioFilters;