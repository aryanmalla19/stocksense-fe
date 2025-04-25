// src/admin/user/PortfolioManagement.jsx
import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import PortfolioFilters from '../components/Portfolio/PortfolioFilters.jsx';
import PortfolioTable from '../components/Portfolio/PortfolioTable.jsx';
import { ThemeContext } from '../../../context/ThemeContext.jsx';

const demoPortfolios = [
  {
    id: 1,
    userName: 'John Doe',
    email: 'john@example.com',
    role: 'Admin',
    status: 'Active',
    createdAt: '2024-01-15',
    lastLogin: '2025-04-20',
    virtualBalance: 125000,
    totalInvestment: 80000,
    unrealizedGains: 25000,
    performance: 25,
    netWorth: 125000 + 80000 + 25000, // 230000
    holdings: [
      { id: 1, symbol: 'AAPL', name: 'Apple Inc.', quantity: 50, avgPrice: 120, currentPrice: 150 },
      { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', quantity: 30, avgPrice: 2000, currentPrice: 2200 },
    ],
    allocation: {
      cash: 45000,
      stocks: 80000,
      sectors: { Technology: 75000, Others: 5000 },
    },
    transactions: [
      { id: 1, symbol: 'AAPL', name: 'Apple Inc.', type: 'buy', quantity: 50, price: 120, date: '2025-04-01' },
      { id: 2, symbol: 'GOOGL', name: 'Alphabet Inc.', type: 'buy', quantity: 30, price: 2000, date: '2025-04-02' },
    ],
  },
  {
    id: 2,
    userName: 'Jane Smith',
    email: 'jane@example.com',
    role: 'User',
    status: 'Active',
    createdAt: '2024-02-10',
    lastLogin: '2025-04-18',
    virtualBalance: 110000,
    totalInvestment: 60000,
    unrealizedGains: 10000,
    performance: 10,
    netWorth: 110000 + 60000 + 10000, // 180000
    holdings: [
      { id: 3, symbol: 'MSFT', name: 'Microsoft Corp.', quantity: 40, avgPrice: 300, currentPrice: 320 },
    ],
    allocation: {
      cash: 47200,
      stocks: 62800,
      sectors: { Technology: 62800, Others: 0 },
    },
    transactions: [
      { id: 3, symbol: 'MSFT', name: 'Microsoft Corp.', type: 'buy', quantity: 40, price: 300, date: '2025-04-03' },
    ],
  },
  {
    id: 3,
    userName: 'Alice Johnson',
    email: 'alice@example.com',
    role: 'User',
    status: 'Inactive',
    createdAt: '2024-03-05',
    lastLogin: '2025-04-10',
    virtualBalance: 95000,
    totalInvestment: 50000,
    unrealizedGains: -5000,
    performance: -5,
    netWorth: 95000 + 50000 - 5000, // 140000
    holdings: [
      { id: 4, symbol: 'TSLA', name: 'Tesla Inc.', quantity: 20, avgPrice: 1000, currentPrice: 900 },
    ],
    allocation: {
      cash: 77000,
      stocks: 18000,
      sectors: { Technology: 18000, Others: 0 },
    },
    transactions: [
      { id: 4, symbol: 'TSLA', name: 'Tesla Inc.', type: 'buy', quantity: 20, price: 1000, date: '2025-04-04' },
    ],
  },
];

const PortfolioManagement = () => {
  const { theme } = useContext(ThemeContext);
  const [portfolios] = useState(demoPortfolios);
  const [filters, setFilters] = useState({
    userSearch: '',
    performanceSort: '',
    activeTraders: false,
  });

  // Filter and sort portfolios based on user input
  const filteredPortfolios = portfolios
    .filter((portfolio) => {
      const matchesSearch =
        portfolio.userName.toLowerCase().includes(filters.userSearch.toLowerCase()) ||
        portfolio.email.toLowerCase().includes(filters.userSearch.toLowerCase());
      const matchesActiveTraders = filters.activeTraders ? portfolio.transactions.length > 0 : true;
      return matchesSearch && matchesActiveTraders;
    })
    .sort((a, b) => {
      if (filters.performanceSort === 'high') return b.performance - a.performance;
      if (filters.performanceSort === 'low') return a.performance - b.performance;
      return 0;
    });

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Portfolio Management</h2>

      <PortfolioFilters filters={filters} setFilters={setFilters} />
      {filteredPortfolios.length === 0 ? (
        <div className="text-center text-gray-600">No portfolios found.</div>
      ) : (
        <PortfolioTable portfolios={filteredPortfolios} />
      )}
    </div>
  );
};

export default PortfolioManagement;