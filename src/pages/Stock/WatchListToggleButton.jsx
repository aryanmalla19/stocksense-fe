import React, { useState, useEffect } from "react";
import { IoMdAddCircle, IoMdRemoveCircle } from "react-icons/io";
import useAddWatchList from "../../hooks/stocks/useAddWatchList";

const WatchlistToggleButton = ({
  stockID,
  initialIsWatchlist,
  removeStock,
  refetchSortedData,
}) => {
  const { addWatchList, removeWatchList, isLoading, isError, error } =
    useAddWatchList();
  const [isWatchlist, setIsWatchlist] = useState(initialIsWatchlist);

  useEffect(() => {
    setIsWatchlist(initialIsWatchlist);
  }, [initialIsWatchlist]);

  const handleClick = () => {
    const previous = isWatchlist;
    const next = !previous;
    setIsWatchlist(next);

    const apiAction = next ? addWatchList : removeWatchList;

    apiAction(stockID, {
      onSuccess: (data) => {
        setIsWatchlist(data?.is_watchlist ?? next);
        if (!next && removeStock) {
          removeStock(stockID);
        }
        if (refetchSortedData) {
          refetchSortedData();
        }
      },
      onError: () => {
        setIsWatchlist(previous);
      },
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="col-span-1 flex justify-center items-center cursor-pointer">
      {isWatchlist ? (
        <IoMdRemoveCircle
          onClick={handleClick}
          className="text-red-500 w-5 h-5 transition duration-150"
          title="Remove from watchlist"
        />
      ) : (
        <IoMdAddCircle
          onClick={handleClick}
          className="text-gray-400 hover:text-green-500 w-5 h-5 transition duration-150"
          title="Add to watchlist"
        />
      )}
    </div>
  );
};

export default WatchlistToggleButton;
