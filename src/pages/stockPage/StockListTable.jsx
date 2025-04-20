import React, { useEffect, useState, useMemo } from "react";
import { useLocation } from "react-router-dom";
import StockListTableHeader from "./StockListTableHeader";
import Pagination from "./Pagination";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import StockListRow from "./StockListRow";
import useSort from "../../hooks/stockshooks/useSort";

const StockListTable = ({ theme, searchSymbol }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  const [watchListStocks, setWatchListStocks] = useState([]);
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [pageNumber, setPageNumber] = useState(1);

  const { refetch } = useFetchWatchList(); // For fetching the watchlist
  const { data: fetchedData, isLoading, isError, refetch: refetchSortedData } = useSort(sortBy, sortOrder, pageNumber); // For sorted data
  console.log(fetchedData);
  // Handle table header sorting clicks
  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  // Remove a stock locally when toggled off in watchlist view
  const handleRemoveStock = (stockID) => {
    if (isWatchlist) {
      setWatchListStocks((prev) =>
        prev.filter((stock) => stock.id !== stockID)
      );
      // Call the refetch function to update the sorted list of stocks
      refetchSortedData();  // This will refetch the sorted data after the stock removal
    }
  };

  // Fetch watchlist items if we're on the watch-list route
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

  // Choose data source: watchlist vs. sorted stocks from useSort
  const displayStocks = useMemo(() => {
    const base = isWatchlist ? watchListStocks : fetchedData?.data ?? [];
    return base.filter((s) =>
      s.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }, [isWatchlist, watchListStocks, fetchedData, searchSymbol]);

  // Display previous data while loading new data
  const currentStocks = isLoading ? watchListStocks : displayStocks;

  return (
    <section className="details-container">
      <StockListTableHeader
        theme={theme}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />

      <div className="overflow-y-auto h-90 flex-1 scrollbar-hidden transition-opacity duration-300">
        <div className="space-y-2 mt-2">
          {/* Show previous data while loading */}
          {currentStocks.length === 0 ? (
            <div className="text-center text-gray-500">No Stock Found</div>
          ) : (
            currentStocks.map((stock, idx) => (
              <StockListRow
                key={stock.id || idx}
                stock={stock}
                theme={theme}
                removeStock={handleRemoveStock}
                refetchSortedData={refetchSortedData}  // Pass refetchSortedData here
              />
            ))
          )}
        </div>

        {/* Error handling */}
        {isError && (
          <div className="text-center mt-4 text-sm text-red-500">
            Failed to load data.
          </div>
        )}
      </div>

      <Pagination
        links={fetchedData?.links}
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
      />
    </section>
  );
};

export default StockListTable;
