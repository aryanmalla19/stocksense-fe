// src/admin/Portfolio/PortfolioDashboard.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PortfolioFilters from './PortfolioFilters';
import PortfolioTable from './PortfolioTable';
import AllocationChart from './AllocationChart';

const PortfolioDashboard = () => {
  const [portfolios, setPortfolios] = useState([]);
  const [allocations, setAllocations] = useState({});
  const [filters, setFilters] = useState({
    user_search: '',
    performance: '',
    active_traders: false,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get('/api/portfolios/dashboard', { params: filters })
      .then((response) => {
        setPortfolios(response.data);
        // Fetch allocation for each portfolio
        response.data.forEach((portfolio) => {
          axios
            .get(`/api/portfolios/${portfolio.portfolio_id}/allocation`)
            .then((res) => {
              setAllocations((prev) => ({
                ...prev,
                [portfolio.portfolio_id]: res.data,
              }));
            })
            .catch((error) => console.error(`Error fetching allocation for portfolio ${portfolio.portfolio_id}:`, error));
        });
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching portfolios:', error);
        setLoading(false);
      });
  }, [filters]);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Portfolio Dashboard</h2>
      <PortfolioFilters filters={filters} setFilters={setFilters} />
      {loading ? (
        <div className="text-center text-gray-600">Loading portfolios...</div>
      ) : portfolios.length === 0 ? (
        <div className="text-center text-gray-600">No portfolios found.</div>
      ) : (
        <>
          <PortfolioTable portfolios={portfolios} />
          <div className="mt-8 space-y-8">
            {portfolios.map((portfolio) => (
              <AllocationChart
                key={portfolio.portfolio_id}
                portfolio={portfolio}
                allocation={allocations[portfolio.portfolio_id]}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default PortfolioDashboard;