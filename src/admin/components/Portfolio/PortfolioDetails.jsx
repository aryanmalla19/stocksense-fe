// src/admin/user/PortfolioDetails.jsx
import React, { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AllocationChart from './AllocationChart.jsx'; // Fixed path: same directory
import { ThemeContext } from '../../../context/ThemeContext.jsx';

const PortfolioDetails = () => {
  const { theme } = useContext(ThemeContext);
  const { state } = useLocation();
  const navigate = useNavigate();

  const portfolio = state?.portfolio;

  // Debug: Log the state and portfolio
  console.log('Location state:', state);
  console.log('Portfolio from state:', portfolio);

  if (!portfolio) {
    return <div className="p-6 text-center text-gray-600">Portfolio not found.</div>;
  }

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">{portfolio.userName}'s Portfolio</h2>
        <button
          onClick={() => navigate('/portfoliomanagement')}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Back to Portfolios
        </button>
      </div>

      {/* Portfolio Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h4 className="text-lg font-semibold text-purple-700">Virtual Balance</h4>
          <p className="text-2xl">${portfolio.virtualBalance.toFixed(2)}</p>
        </div>
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h4 className="text-lg font-semibold text-purple-700">Total Investment</h4>
          <p className="text-2xl">${portfolio.totalInvestment.toFixed(2)}</p>
        </div>
        <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
          <h4 className="text-lg font-semibold text-purple-700">Net Worth</h4>
          <p className="text-2xl">${portfolio.netWorth.toFixed(2)}</p>
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
        <AllocationChart portfolio={portfolio} allocation={portfolio.allocation} />
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