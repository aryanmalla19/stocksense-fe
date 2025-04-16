import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import StockListTableHeader from "./StockListTableHeader";
import Pagination from "./Pagination";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import useStocks from "../../hooks/stockshooks/useStocks";
import StockListRow from "./StockListRow";

const StockListTable = ({ searchSymbol, theme }) => {
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  const { refetch } = useFetchWatchList();
  const [watchListStocks, setWatchListStocks] = useState([]);

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

  const filteredStocks = useStocks(searchSymbol);
  const displayStocks = isWatchlist ? watchListStocks : filteredStocks;

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

      <Pagination />
    </section>
  );
};

export default StockListTable;
