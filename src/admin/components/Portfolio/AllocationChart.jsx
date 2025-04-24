import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AllocationChart = ({ portfolio, allocation }) => {
  if (!allocation) {
    return <div className="text-center text-gray-600">No allocation data available.</div>;
  }

  const data = {
    labels: ['Stocks', 'Cash', ...Object.keys(allocation.sectors)],
    datasets: [
      {
        data: [allocation.stocks, allocation.cash, ...Object.values(allocation.sectors)],
        backgroundColor: ['#6B7280', '#D1D5DB', '#F87171', '#FBBF24', '#34D399', '#60A5FA'],
        borderColor: '#ffffff',
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: { font: { size: 14 } },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.parsed.toFixed(2)}`,
        },
      },
    },
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow mb-6">
      <h3 className="text-lg font-semibold text-purple-700 mb-4">{portfolio.user_name}'s Portfolio Allocation</h3>
      <div className="max-w-md mx-auto">
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default AllocationChart;