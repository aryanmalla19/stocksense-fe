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

  // Watchlist state
  const { refetch } = useFetchWatchList();
  const [watchListStocks, setWatchListStocks] = useState([]);

  // Sorting state
  const [sortBy, setSortBy] = useState("");
  const [sortOrder, setSortOrder] = useState("");

  // Pagination
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useSort(sortBy, sortOrder, pageNumber);

  const handleSort = (columnKey) => {
    if (sortBy === columnKey) {
      setSortOrder((prev) => (prev === "asc" ? "desc" : "asc"));
    } else {
      setSortBy(columnKey);
      setSortOrder("asc");
    }
  };

  console.log(data);

  const handleRemoveStock = (stockID) => {
    setWatchListStocks((prevStocks) =>
      prevStocks.filter((stock) => stock.id !== stockID)
    );
  };

  useEffect(() => {
    if (isWatchlist) {
      refetch().then((res) => {
        const watchListArray = res.data?.data;
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
    return (isWatchlist ? watchListStocks : data?.data ?? []).filter((stock) =>
      stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
    );
  }, [isWatchlist, watchListStocks, data?.data, searchSymbol]);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching stocks.</div>;

  return (
    <section className="details-container">
      <StockListTableHeader
        theme={theme}
        sortBy={sortBy}
        sortOrder={sortOrder}
        onSort={handleSort}
      />

      <div className="overflow-y-auto h-90 flex-1 scrollbar-hidden">
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
      </div>

      <Pagination links={data?.links} pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </section>
  );
};

export default StockListTable;
