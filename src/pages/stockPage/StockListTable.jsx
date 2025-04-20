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

  const { refetch } = useFetchWatchList();
  const [watchListStocks, setWatchListStocks] = useState([]);

  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  const [pageNumber, setPageNumber] = useState(1);

  const { data: fetchedData, isLoading, isError } = useSort(sortBy, sortOrder, pageNumber);

  const [stocksData, setStocksData] = useState(fetchedData?.data ?? []);

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  const handleRemoveStock = (stockID) => {
    setWatchListStocks((prevStocks) =>
      prevStocks.filter((stock) => stock.id !== stockID)
    );
  };

  // Keep previous data while loading
  useEffect(() => {
    if (!isLoading && !isError) {
      setStocksData(fetchedData?.data ?? []);
    }
  }, [fetchedData, isLoading, isError]);

  // Fetch watchlist if applicable
  useEffect(() => {
    if (isWatchlist) {
      refetch().then((res) => {
        const watchListArray = res?.data;
        if (Array.isArray(watchListArray)) {
          const stocks = watchListArray.map((item) => item.stock);
          setWatchListStocks(stocks);
        } else {
          console.warn("Watchlist data is not an array:", watchListArray);
        }
      });
    }
  }, [isWatchlist, refetch]);

  const displayStocks = useMemo(() => {
    const baseData = isWatchlist ? watchListStocks : stocksData;
    return baseData.filter((stock) =>
      stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }, [isWatchlist, watchListStocks, stocksData, searchSymbol]);

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
          {displayStocks.length === 0 ? (
            <div className="text-center text-gray-500">No Stock Found</div>
          ) : (
            displayStocks.map((stock, index) => (
              <StockListRow
                key={index}
                stock={stock}
                theme={theme}
                removeStock={handleRemoveStock}
              />
            ))
          )}
        </div>

        {/* Optional small loading indicator */}
        {isLoading && (
          <div className="text-center mt-4 text-sm text-gray-400 italic">
            Updating list...
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
