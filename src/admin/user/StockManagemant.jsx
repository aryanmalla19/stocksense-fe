import React, { useState, useContext } from "react";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { ThemeContext } from "../../context/ThemeContext.jsx";
import StockList from "../components/Stock/StockList.jsx";
import StockForm from "../components/Stock/StockForm.jsx";
import { useStocks } from "../../hooks/stocks/useStocks.js";
import Pagination from "../../pages/Stock/Pagination.jsx";
import { createStock, updateStock } from "../../api/stocksApiService.js";

function StockManagement() {
  const { theme } = useContext(ThemeContext);
  const [showForm, setShowForm] = useState(false);
  const [editStock, setEditStock] = useState(null);
  const [page, setPage] = useState(1);
  const [searchSymbol, setSearchSymbol] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const queryClient = useQueryClient();

  const { data, isLoading, isError, isFetching } = useStocks(
    { searchSymbol, pageNumber: page, per_page: 10 },
    { keepPreviousData: true }
  );

  const { mutate: createStockMutation, isLoading: isCreating } = useMutation({
    mutationFn: createStock,
    onSuccess: () => {
      queryClient.invalidateQueries(["stocks"]);
    },
    onError: (error) => {
      console.error("Error creating stock:", error);
    },
  });

  const { mutate: updateStockMutation, isLoading: isUpdating } = useMutation({
    mutationFn: ({ id, stock }) => updateStock(id, stock),
    onSuccess: () => {
      queryClient.invalidateQueries(["stocks"]);
    },
    onError: (error) => {
      console.error("Error updating stock:", error);
    },
  });

  const handleEdit = (stock) => {
    setEditStock(stock);
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setEditStock(null);
  };

  const handleSaveStock = (newStock) => {
    if (editStock) {
      updateStockMutation({ id: editStock.id, stock: newStock });
    } else {
      createStockMutation(newStock);
    }
    setShowForm(false);
    setEditStock(null);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setPage(1);
    setSearchSymbol(searchInput.trim());
  };

  if (isError)
    return (
      <div className="text-center py-10 text-red-500">
        Error loading stocks.
      </div>
    );

  return (
    <div className="mx-auto p-4">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 text-[#9E15BF]">
        <h1 className="text-2xl md:text-3xl font-bold py-2">
          Stock Management
        </h1>
      </div>

      <form
        onSubmit={handleSearchSubmit}
        className="flex flex-col sm:flex-row items-center mb-6 gap-4 mx-8"
      >
        <input
          type="text"
          placeholder="Search by symbol..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className={`px-4 py-2 rounded-md border shadow-sm w-full sm:w-64 ${
            theme === "dark"
              ? "bg-gray-800 border-gray-700 text-gray-200"
              : "bg-white border-gray-300 text-gray-900"
          }`}
        />
        <button
          type="submit"
          className="bg-[#9E15BF] hover:bg-purple-700 text-white font-semibold px-6 py-2 rounded-md"
        >
          Search
        </button>
      </form>

      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300 ${
          theme === "dark"
            ? "bg-dark-bg text-dark-text"
            : "bg-light-bg text-light-text"
        }`}
      >
        <StockList
          stocks={data?.data}
          onAdd={() => setShowForm(true)}
          onEdit={handleEdit}
          theme={theme}
        />

        {showForm && (
          <StockForm
            stock={editStock}
            onCancel={handleCancel}
            onSave={handleSaveStock}
            theme={theme}
            isSaving={isCreating || isUpdating}
          />
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
