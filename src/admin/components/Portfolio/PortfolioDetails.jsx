// src/admin/user/PortfolioDetails.jsx
import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AllocationChart from '../components/Portfolio/AllocationChart.jsx';
import { ThemeContext } from '../components/ThemeContext.jsx';

const demoPortfolios = [
  {
    id: 1,
    userName: 'John Doe',
    email: 'john@example.com',
    virtualBalance: 125000,
    totalInvestment: 80000,
    unrealizedGains: 25000,
    performance: 25,
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
    virtualBalance: 110000,
    totalInvestment: 60000,
    unrealizedGains: 10000,
    performance: 10,
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
    virtualBalance: 95000,
    totalInvestment: 50000,
    unrealizedGains: -5000,
    performance: -5,
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

const PortfolioDetails = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const navigate = useNavigate();
  const portfolio = demoPortfolios.find((p) => p.id === parseInt(id));

  if (!portfolio) {
    return <div className="p-6 text-center text-gray-600">Portfolio not found.</div>;
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">{portfolio.userName}'s Portfolio</h2>
        <button
          onClick={() => navigate('/portfoliomanagement')} // Already correct
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Back to Portfolios
        </button>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h4 className="text-lg font-semibold text-purple-700">Virtual Balance</h4>
          <p className="text-2xl">${portfolio.virtualBalance.toFixed(2)}</p>
        </div>
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h4 className="text-lg font-semibold text-purple-700">Total Investment</h4>
          <p className="text-2xl">${portfolio.totalInvestment.toFixed(2)}</p>
        </div>
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h4 className="text-lg font-semibold text-purple-700">Performance</h4>
          <p className={`text-2xl ${portfolio.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
            {portfolio.performance.toFixed(2)}%
          </p>
        </div>
      </div>

      {/* Allocation Chart */}
      <div className={`p-6 rounded-lg shadow mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h4 className="text-lg font-semibold text-purple-700 mb-4">Allocation</h4>
        <AllocationChart portfolio={{ user_name: portfolio.userName }} allocation={portfolio.allocation} />
      </div>

      {/* Holdings Table */}
      <div className={`p-6 rounded-lg shadow mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h4 className="text-lg font-semibold text-purple-700 mb-4">Holdings</h4>
        {portfolio.holdings.length === 0 ? (
          <p className="text-gray-600">No holdings found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100">
                  <th className="p-3 text-left text-purple-700 font-semibold">Stock</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Quantity</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Average Price</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Current Price</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Value</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Gains/Losses</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.holdings.map((holding) => (
                  <tr key={holding.id} className="border-b hover:bg-purple-50">
                    <td className="p-3">{holding.symbol} ({holding.name})</td>
                    <td className="p-3">{holding.quantity}</td>
                    <td className="p-3">${holding.avgPrice.toFixed(2)}</td>
                    <td className="p-3">${holding.currentPrice.toFixed(2)}</td>
                    <td className="p-3">${(holding.quantity * holding.currentPrice).toFixed(2)}</td>
                    <td className={`p-3 ${holding.currentPrice >= holding.avgPrice ? 'text-green-600' : 'text-red-600'}`}>
                      ${(holding.quantity * (holding.currentPrice - holding.avgPrice)).toFixed(2)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Transaction History */}
      <div className={`p-6 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
        <h4 className="text-lg font-semibold text-purple-700 mb-4">Transaction History</h4>
        {portfolio.transactions.length === 0 ? (
          <p className="text-gray-600">No transactions found.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-purple-100">
                  <th className="p-3 text-left text-purple-700 font-semibold">Date</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Stock</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Type</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Quantity</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Price</th>
                  <th className="p-3 text-left text-purple-700 font-semibold">Total</th>
                </tr>
              </thead>
              <tbody>
                {portfolio.transactions.map((transaction) => (
                  <tr key={transaction.id} className="border-b hover:bg-purple-50">
                    <td className="p-3">{transaction.date}</td>
                    <td className="p-3">{transaction.symbol} ({transaction.name})</td>
                    <td className="p-3 capitalize">{transaction.type}</td>
                    <td className="p-3">{transaction.quantity}</td>
                    <td className="p-3">${transaction.price.toFixed(2)}</td>
                    <td className="p-3">${(transaction.quantity * transaction.price).toFixed(2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default PortfolioDetails;  