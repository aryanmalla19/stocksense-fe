import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import StockListTableHeader from "./StockListTableHeader";
import Pagination from "./Pagination";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import StockListRow from "./StockListRow";
import useSort from "../../hooks/stockshooks/useSort";
import useSelectAllDelete from "../../hooks/stockshooks/useSelectAllDelete";

const StockListTable = ({ theme, searchSymbol }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  // State variables
  const [watchListStocks, setWatchListStocks] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [pageNumber, setPageNumber] = useState(1);
  const [selectedStocks, setSelectedStocks] = useState([]);

  // Hooks for fetch and sorting
  const { alldeleteWatchlist } = useSelectAllDelete();
  const { refetch } = useFetchWatchList();
  const {
    data: fetchedData,
    isLoading,
    isError,
    refetch: refetchSortedData,
  } = useSort(sortBy, sortOrder, pageNumber);

  // Effects
  useEffect(() => {
    if (isWatchlist) {
      refetch().then((res) => {
        const array = res?.data?.data;
        if (Array.isArray(array)) {
          const stocks = array.map((item) => item.stock);
          setWatchListStocks(stocks);
        } else {
          console.warn("Expected an array from watchlist API, got:", array);
        }
      });
    }
  }, [isWatchlist, refetch]);

  // Memoized display stocks based on search and isWatchlist
  const displayStocks = useMemo(() => {
    const base = isWatchlist ? watchListStocks : fetchedData?.data ?? [];
    return base.filter((s) =>
      s.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }, [isWatchlist, watchListStocks, fetchedData, searchSymbol]);

  const currentStocks = isLoading ? watchListStocks : displayStocks;

  // Handlers
  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  const handleRemoveStock = (stockID) => {
    if (isWatchlist) {
      setWatchListStocks((prev) =>
        prev.filter((stock) => stock.id !== stockID)
      );
      refetchSortedData();
    }
  };

  const handleSelectAll = () => {
    if (selectedStocks.length === watchListStocks.length) {
      setSelectedStocks([]);
    } else {
      setSelectedStocks(watchListStocks.map((stock) => stock.id));
    }
  };

  const handleDeleteSelected = () => {
    alldeleteWatchlist.mutate(selectedStocks);
  };

  // Render JSX
  return (
    <section className="details-container">
      {/* Table Header */}
      <StockListTableHeader
        theme={theme}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
        onSelectAll={handleSelectAll}
      />

      {/* Table Body */}
      <div className="overflow-y-auto h-90 flex-1 scrollbar-hidden transition-opacity duration-300">
        <div className="space-y-2 mt-2">
          {currentStocks.length === 0 ? (
            <div className="text-center text-gray-500">No Stock Found</div>
          ) : (
            currentStocks.map((stock, idx) => (
              <StockListRow
                key={stock.id || idx}
                stock={stock}
                theme={theme}
                removeStock={handleRemoveStock}
                refetchSortedData={refetchSortedData}
                isWatchlist={isWatchlist}
              />
            ))
          )}
        </div>

        {/* Error message */}
        {isError && (
          <div className="text-center mt-4 text-sm text-red-500">
            Failed to load data.
          </div>
        )}
      </div>

      {/* Pagination */}
      <Pagination
        links={fetchedData?.links}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </section>
  );
};

export default StockListTable;
