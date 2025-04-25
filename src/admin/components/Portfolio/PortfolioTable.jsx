// src/admin/components/Portfolio/PortfolioTable.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const PortfolioTable = ({ portfolios }) => {
  return (
    <div className="p-6 rounded-lg shadow mb-6">
      <h4 className="text-lg font-semibold text-purple-700 mb-4">Portfolios</h4>
      <div className="overflow-x-auto">
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
                <td className="p-3">${portfolio.unrealizedGains.toFixed(2)}</td>
                <td className={`p-3 ${portfolio.performance >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {portfolio.performance.toFixed(2)}%
                </td>
                <td className="p-3">
                  <Link
                    to={`/portfoliomanagement/${portfolio.id}`} // Fixed path
                    className="text-blue-500 hover:underline"
                  >
                    View Details
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PortfolioTable;