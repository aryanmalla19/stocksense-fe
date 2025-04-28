
import React, { useState, useContext, useEffect } from 'react';
// import { ThemeContext } from '../components/ThemeContext';
import { ThemeContext } from '../../context/ThemeContext.jsx';
import StockList from '../components/Stock/StockList.jsx';
import StockForm from '../components/Stock/StockForm.jsx';
import { useStocks } from "../../hooks/stockshooks/useStocks.js"
import Pagination from '../../pages/stockPage/Pagination.jsx';
function StockManagement() {
  const { theme } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);
  const [editStock, setEditStock] = useState(null);
  const [page, setPage] = useState(1);
  const { data, isLoading, isError } = useStocks({ searchSymbol: "", pageNumber: page, per_page: 10 });
  console.log(page);
  const handleEdit = (stock) => {
    setEditStock(stock);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditStock(null);
  };

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 text-[#9E15BF]">
        <h1 className="text-2xl md:text-3xl font-bold py-2">Stock Management</h1>
      </div>
      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300 ${
          theme === 'dark'
            ? 'bg-gray-800 border border-gray-700 shadow-md shadow-black/30'
            : 'bg-white border border-gray-200 shadow-md shadow-gray-300'
        }`}
      >
        <StockList
          stocks={data?.data}
          onAdd={() => setShowForm(true)}
          onEdit={handleEdit}
          theme={theme}
        />
        {showForm && (
          <StockForm stock={editStock} onCancel={handleCancel} theme={theme} />
        )}
      </div>
      <Pagination
        links={data?.links}
        pageNumber={page}
        setPageNumber={setPage}
      />
    </div>
  );
}


export default StockManagement;