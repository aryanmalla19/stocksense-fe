import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";
import useAddWatchList from "../../hooks/stockshooks/useAddWatchList";

const Addwatchlist = ({ stockID }) => {
  const { addWatchList, isLoading, isError, error } = useAddWatchList();

  // Check sessionStorage for the initial state
  const initialState =
    sessionStorage.getItem(`watchlist-${stockID}`) === "true";

  const [addWatch, setAddWatch] = useState(initialState);

  const handleClick = () => {
    if (!stockID) {
      console.log("Please provide a stock ID");
      return;
    }
    // Toggle the addWatch state
    const newState = !addWatch;
    setAddWatch(newState);
    addWatchList(stockID);
    // Save the updated state in sessionStorage
    sessionStorage.setItem(`watchlist-${stockID}`, newState.toString());
    console.log(stockID);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error: {error.message}</p>;

  return (
    <div className="col-span-1 flex justify-center items-center cursor-pointer">
      <IoMdAddCircle
        className={`w-5 h-5 ${addWatch ? "text-green-500" : ""}`}
        onClick={handleClick}
      />
    </div>
  );
};

export default Addwatchlist;
