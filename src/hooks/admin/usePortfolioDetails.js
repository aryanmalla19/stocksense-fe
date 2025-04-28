// src/hooks/admin/usePortfolioDetails.js
import { useState, useEffect } from 'react';
import axiosInstance from '../../api/axiosInstance';

const usePortfolioDetails = (id) => {
  const [portfolio, setPortfolio] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await axiosInstance.get(`/admin/users/${id}`);
        setPortfolio(response.data.data); 
      } catch (err) {
        console.error('Error fetching portfolio:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, [id]);

  return { portfolio, loading, error };
};

export default usePortfolioDetails;
