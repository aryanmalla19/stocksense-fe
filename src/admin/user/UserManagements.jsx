import React, { useContext, useState } from 'react';
import PortfolioFilters from '../components/Portfolio/PortfolioFilters.jsx';
import PortfolioTable from '../components/Portfolio/PortfolioTable.jsx';
import AllocationChart from '../components/Portfolio/AllocationChart.jsx';
import { ThemeContext } from '../../context/ThemeContext.jsx';


// Static demo data for portfolios
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

const PortfolioDashboard = () => {
  const {theme} = useContext(ThemeContext)
  const [portfolios] = useState(demoPortfolios);
  const [selectedPortfolio, setSelectedPortfolio] = useState(null);
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

  const openDetails = (portfolio) => setSelectedPortfolio(portfolio);
  const closeDetails = () => setSelectedPortfolio(null);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Portfolio Dashboard</h2>


      <PortfolioFilters filters={filters} setFilters={setFilters} />
      {filteredPortfolios.length === 0 ? (
        <div className="text-center text-gray-600">No portfolios found.</div>
      ) : (
        <PortfolioTable portfolios={filteredPortfolios} onViewDetails={openDetails} />
      )}

      {/* Modal for Portfolio Details */}
      {selectedPortfolio && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-4xl w-full max-h-[80vh] overflow-y-auto">
            <h3 className="text-2xl font-bold text-purple-700 mb-4">{selectedPortfolio.userName}'s Portfolio</h3>

            {/* Portfolio Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-purple-700">Virtual Balance</h4>
                <p className="text-2xl text-gray-800">${selectedPortfolio.virtualBalance.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-purple-700">Total Investment</h4>
                <p className="text-2xl text-gray-800">${selectedPortfolio.totalInvestment.toFixed(2)}</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow">
                <h4 className="text-lg font-semibold text-purple-700">Performance</h4>
                <p className={`text-2xl ${selectedPortfolio.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {selectedPortfolio.performance.toFixed(2)}%
                </p>
              </div>
            </div>

            {/* Allocation Chart */}
            <AllocationChart 
              portfolio={{ user_name: selectedPortfolio.userName }} 
              allocation={selectedPortfolio.allocation} 
            />

            {/* Holdings Table */}
            <div className="bg-white p-6 rounded-lg shadow mb-6">
              <h4 className="text-lg font-semibold text-purple-700 mb-4">Holdings</h4>
              {selectedPortfolio.holdings.length === 0 ? (
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
                      {selectedPortfolio.holdings.map((holding) => (
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
            <div className="bg-white p-6 rounded-lg shadow">
              <h4 className="text-lg font-semibold text-purple-700 mb-4">Transaction History</h4>
              {selectedPortfolio.transactions.length === 0 ? (
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
                      {selectedPortfolio.transactions.map((transaction) => (
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

            {/* Close Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={closeDetails}
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>

    
    
  );
};

export default PortfolioDashboard;