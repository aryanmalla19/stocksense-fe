import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StockListTableHeader from "./StockListTableHeader";
import Pagination from "./Pagination";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import { useQuery } from "@tanstack/react-query";
import StockListRow from "./StockListRow";
import { stockList } from "../../api/stocksApiService";

const StockListTable = ({ theme, searchSymbol }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  // watchlist
  const { refetch } = useFetchWatchList();
  const [watchListStocks, setWatchListStocks] = useState([]);

  // pagination
  const [pageNumber, setPageNumber] = useState(1);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["stocks", pageNumber],
    queryFn: () => stockList({ page: pageNumber, limit: 5 }),
    keepPreviousData: true,
  });

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

  const displayStocks = isWatchlist
    ? watchListStocks.filter((stock) =>
        stock.symbol.toLowerCase().includes 
      )
    : data?.data?.filter((stock) =>
        stock.symbol.toLowerCase().includes(searchSymbol.toLowerCase())
      ) ?? [];

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error fetching stocks.</div>;

  return (
    <section className="details-container">
      <StockListTableHeader theme={theme} />

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

      <Pagination pageNumber={pageNumber} setPageNumber={setPageNumber} />
    </section>
  );
};

export default StockListTable;
