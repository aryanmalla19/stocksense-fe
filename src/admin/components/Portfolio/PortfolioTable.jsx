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
              <th className="p-3 text-left text-purple-700 font-semibold">Name</th>
              <th className="p-3 text-left text-purple-700 font-semibold">Email</th>
              <th className="p-3 text-left text-purple-700 font-semibold">Role</th>
              <th className="p-3 text-left text-purple-700 font-semibold">Status</th>
              <th className="p-3 text-left text-purple-700 font-semibold">Created At</th>
              <th className="p-3 text-left text-purple-700 font-semibold">Last Login</th>
              <th className="p-3 text-left text-purple-700 font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {portfolios.map((portfolio) => (
              <tr key={portfolio.id} className="border-b hover:bg-purple-50">
                <td className="p-3">{portfolio.userName}</td>
                <td className="p-3">{portfolio.email}</td>
                <td className="p-3">{portfolio.role}</td>
                <td className="p-3">{portfolio.status}</td>
                <td className="p-3">{portfolio.createdAt}</td>
                <td className="p-3">{portfolio.lastLogin}</td>
                <td className="p-3">
                  <Link
                    to={`/portfoliomanagement/${portfolio.id}`}
                    state={{ portfolio }}
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