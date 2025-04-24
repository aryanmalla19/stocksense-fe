import React from 'react';

const PortfolioTable = ({ portfolios, onViewDetails }) => {
  return (
    <div className="overflow-x-auto bg-white rounded-lg shadow">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-purple-100">
            <th className="p-3 text-left text-purple-700 font-semibold">User</th>
            <th className="p-3 text-left text-purple-700 font-semibold">Virtual Balance</th>
            <th className="p-3 text-left text-purple-700 font-semibold">Total Investment</th>
            <th className="p-3 text-left text-purple-700 font-semibold">Unrealized Gains</th>
            <th className="p-3 text-left text-purple-700 font-semibold">Performance</th>
            <th className="p-3 text-left text-purple-700 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio) => (
            <tr key={portfolio.id} className="border-b hover:bg-purple-50">
              <td className="p-3">{portfolio.userName}</td>
              <td className="p-3">${portfolio.virtualBalance.toFixed(2)}</td>
              <td className="p-3">${portfolio.totalInvestment.toFixed(2)}</td>
              <td className={`p-3 ${portfolio.unrealizedGains >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${portfolio.unrealizedGains.toFixed(2)}
              </td>
              <td className={`p-3 ${portfolio.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                {portfolio.performance.toFixed(2)}%
              </td>
              <td className="p-3">
                <button
                  onClick={() => onViewDetails(portfolio)}
                  className="px-3 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
                >
                  View Details
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PortfolioTable;