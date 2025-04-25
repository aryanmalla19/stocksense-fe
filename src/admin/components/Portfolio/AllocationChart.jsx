// src/admin/components/Portfolio/AllocationChart.jsx
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const AllocationChart = ({ portfolio, allocation }) => {
  // Investment vs Net Worth Pie Chart
  const investmentVsNetWorthData = {
    labels: ['Total Investment', 'Net Worth'],
    datasets: [
      {
        data: [portfolio.totalInvestment, portfolio.netWorth],
        backgroundColor: ['#FF6384', '#36A2EB'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB'],
      },
    ],
  };

  // Sector Breakdown Pie Chart
  const sectorData = {
    labels: Object.keys(allocation.sectors),
    datasets: [
      {
        data: Object.values(allocation.sectors),
        backgroundColor: ['#FFCE56', '#4BC0C0', '#9966FF'],
        hoverBackgroundColor: ['#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: $${context.raw.toFixed(2)}`,
        },
      },
    },
  };

  return (
    <div>
      <div className="mb-6">
        <h5 className="text-md font-semibold text-purple-700 mb-2">Investment vs Net Worth</h5>
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
          <Pie data={investmentVsNetWorthData} options={options} />
        </div>
      </div>
      <div>
        <h5 className="text-md font-semibold text-purple-700 mb-2">Sector Breakdown</h5>
        <div style={{ maxWidth: '300px', margin: '0 auto' }}>
          <Pie data={sectorData} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AllocationChart;