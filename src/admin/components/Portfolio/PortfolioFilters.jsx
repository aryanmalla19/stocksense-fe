// src/admin/components/Portfolio/PortfolioFilters.jsx
import React from 'react';

const PortfolioFilters = ({ filters, setFilters }) => {
  return (
    <div className="mb-6 p-4 rounded-lg shadow">
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search by name or email..."
            value={filters.userSearch}
            onChange={(e) => setFilters({ ...filters, userSearch: e.target.value })}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>
        <div>
          <select
            value={filters.performanceSort}
            onChange={(e) => setFilters({ ...filters, performanceSort: e.target.value })}
            className="p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="">Sort by Performance</option>
            <option value="high">High to Low</option>
            <option value="low">Low to High</option>
          </select>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={filters.activeTraders}
            onChange={(e) => setFilters({ ...filters, activeTraders: e.target.checked })}
            className="mr-2"
          />
          <label>Active Traders Only</label>
        </div>
      </div>
    </div>
  );
};

export default PortfolioFilters;