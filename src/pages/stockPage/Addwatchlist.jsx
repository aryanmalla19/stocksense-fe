import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import useAddWatchList from "../../hooks/stockshooks/useAddWatchList";

const Addwatchlist = ({ stockID, initialIsWatchlist }) => {
  const { addWatchList, removeWatchList, isLoading, isError, error } =
    useAddWatchList();
  const [isWatchlist, setIsWatchlist] = useState(initialIsWatchlist || false);

  const handleClick = () => {
    if (!stockID) {
      console.log("No stock ID provided.");
      return;
    }

    const previousState = isWatchlist;
    const newState = !previousState;
    setIsWatchlist(newState);

    const apiAction = newState ? addWatchList : removeWatchList;

    apiAction(stockID, {
      onSuccess: (data) => {
        if (data?.is_watchlist !== undefined) {
          setIsWatchlist(data.is_watchlist);
        }
      },
      onError: () => {
        setIsWatchlist(previousState);
      },
    });
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="col-span-1 flex justify-center items-center cursor-pointer">
      <IoMdAddCircle
        className={`w-5 h-5 transition duration-150 ${
          isWatchlist ? "text-green-500" : "text-gray-400"
        }`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Addwatchlist;
