// StockListTable.js
import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import StockListTableHeader from "./StockListTableHeader";
import Pagination from "./Pagination";
import useFetchWatchList from "../../hooks/stockshooks/useFetchWatchList";
import useStocks from "../../hooks/stockshooks/useStocks";
import StockListRow from "./StockListRow";

const StockListTable = ({ searchSymbol }) => {
  const { theme } = useContext(ThemeContext);
  const location = useLocation();
  const isWatchlist = location.pathname.includes("watch-list");

  const { fetchWatchList } = useFetchWatchList();
  const [watchListStocks, setWatchListStocks] = useState([]);

  const handleRemoveStock = (stockID) => {
    setWatchListStocks((prevStocks) =>
      prevStocks.filter((stock) => stock.id !== stockID)
    );
  };

  useEffect(() => {
    if (isWatchlist) {
      fetchWatchList.mutate(undefined, {
        onSuccess: (res) => {
          const stocks = res.data.map((item) => item.stock);
          setWatchListStocks(stocks);
        },
      });
    }
  }, [isWatchlist]);

  const filteredStocks = useStocks(searchSymbol);
  const displayStocks = isWatchlist ? watchListStocks : filteredStocks;

  return (
    <section className="details-container">
      <StockListTableHeader />

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
