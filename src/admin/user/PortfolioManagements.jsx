import React, { useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import useUsers from '../../hooks/admin/useUsers.js';

const PortfolioManagement = () => {
  const { theme } = useContext(ThemeContext);
  const { data, isLoading, error } = useUsers();
  console.log(data, "AAA");
  // Show loading or error message when fetching data
  if (isLoading) return <div>Loading portfolios...</div>;
  if (error) return <div>Error fetching portfolios: {error.message}</div>;

  return (
    <div className="p-6 min-h-screen">
      <h2 className="text-3xl font-bold text-purple-700 mb-6">Portfolio Management</h2>

      Simply display the data without any filters or sorting

    </div>
  );
};

export default PortfolioManagement;
