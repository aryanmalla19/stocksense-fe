import React, { useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import usePortfolioDetails from '../../../hooks/admin/usePortfolioDetails.js';
import AllocationChart from './AllocationChart.jsx';
import { ThemeContext } from '../../../context/ThemeContext.jsx';

const PortfolioDetails = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme);
  const { id } = useParams();
  const navigate = useNavigate();
  const { portfolio, loading, error } = usePortfolioDetails(id);

  if (loading) {
    return <div className="p-6 text-center text-xl">Loading portfolio...</div>;
  }

  if (error) {
    return <div className="p-6 text-center text-xl text-red-500">Error loading portfolio: {error.message}</div>;
  }

  if (!portfolio) {
    return <div className="p-6 text-center text-gray-600">Portfolio not found.</div>;
  }

  const holdings = portfolio.holdings || [];
  console.log(portfolio);
  const transactions = portfolio.transactions || [];

  return (
    <div className="p-6 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-purple-700">{portfolio.name}'s Portfolio</h2>
        <button
          onClick={() => navigate('/portfoliomanagement')}
          className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
        >
          Back to Portfolios
        </button>
      </div>

      {/* Portfolio Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <InfoCard title="Virtual Balance" value={`Rs ${portfolio.portfolio.amount.toFixed(2)}`} theme={theme} />
        <InfoCard title="Total Investment" value={`Rs ${portfolio.portfolio.investment.toFixed(2)}`} theme={theme} />
        <InfoCard title="Net Worth" value={`Rs ${portfolio.portfolio.net_worth.toFixed(2)}`} theme={theme} />
        <InfoCard
          title="Gain / Loss"
          value={`${portfolio.portfolio.gain_loss.toFixed(2)}`}
          theme={theme}
          isPositive={portfolio.portfolio.gain_loss >= 0}
        />
      </div>

      {/* Allocation Chart */}
      {portfolio.allocation && portfolio.allocation.sectors ? (
        <SectionCard title="Allocation" theme={theme}>
          <AllocationChart portfolio={portfolio} allocation={portfolio.allocation} />
        </SectionCard>
      ) : (
        <SectionCard title="Allocation" theme={theme}>
          <p className="text-gray-600">No allocation data available.</p>
        </SectionCard>
      )}

      {/* Holdings Table */}
      <SectionCard title="Holdings" theme={theme}>
        {holdings.length === 0 ? (
          <p className="text-gray-600">No holdings found.</p>
        ) : (
          <DataTable
            theme={theme}
            columns={['Stock', 'Quantity', 'Average Price', 'Current Price', 'Value', 'Gains/Losses']}
            rows={holdings.map((holding) => ({
              key: holding.id,
              cells: [
                `${holding.stock.symbol} (${holding.stock.company_name})`,
                holding.quantity,
                `Rs ${holding.average_price}`,
                `Rs ${holding.stock.latest_price.current_price}`,
                `Rs ${Math.round((holding.quantity * holding.stock.latest_price.current_price))}`,
                {
                  value: `Rs ${Math.round(holding.quantity * (holding.stock.latest_price.current_price - holding.average_price))}`,
                  color: holding.stock.latest_price.current_price >= holding.average_price ? 'text-green-600' : 'text-red-600',
                },
              ],
            }))}
          />
        )}
      </SectionCard>

      {/* Transaction History Table */}
      <SectionCard title="Transaction History" theme={theme}>
        {transactions.length === 0 ? (
          <p className="text-gray-600">No transactions found.</p>
        ) : (
          <DataTable
          theme={theme}
            columns={['Date', 'Stock', 'Type', 'Quantity', 'Price', 'Transaction Fee', 'Total']}
            rows={transactions.map((transaction) => ({
              key: transaction.id,
              cells: [
                new Date(transaction.created_at).toLocaleDateString(),
                `${transaction.symbol} (${transaction.company_name})`,
                transaction.type.charAt(0).toUpperCase() + transaction.type.slice(1),
                transaction.quantity,
                `Rs ${transaction.price}`,
                `Rs ${transaction.transaction_fee}`,
                `Rs ${(transaction.quantity * transaction.price).toFixed(2)}`,
              ],
            }))}
          />
        )}
      </SectionCard>
    </div>
  );
};

const InfoCard = ({ title, value, theme, isPositive }) => (
  <div className={`p-4 rounded-lg shadow ${theme === 'dark' ? 'bg-gray-800 text-gray-200' : 'bg-white text-gray-800'}`}>
    <h4 className="text-lg font-semibold text-purple-700">{title}</h4>
    <p className={`text-2xl ${isPositive !== undefined ? (isPositive ? 'text-green-600' : 'text-red-600') : ''}`}>
      {value}
    </p>
  </div>
);

const SectionCard = ({ title, children, theme }) => (
  <div className={`p-6 rounded-lg shadow mb-6 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'}`}>
    <h4 className="text-lg font-semibold text-purple-700 mb-4">{title}</h4>
    {children}
  </div>
);

const DataTable = ({ columns, rows, theme }) => (
  <div className="overflow-x-auto">
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-purple-100">
          {columns.map((col, idx) => (
            <th key={idx} className="p-3 text-left text-purple-700 font-semibold">
              {col}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row) => (
          <tr key={row.key} className={`border-b ${theme == 'light'? 'hover:bg-purple-50': 'hover:bg-purple-500'}`}>
            {row.cells.map((cell, idx) => (
              <td
                key={idx}
                className={`p-3 ${typeof cell === 'object' ? cell.color : ''}`}
              >
                {typeof cell === 'object' ? cell.value : cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default PortfolioDetails;
