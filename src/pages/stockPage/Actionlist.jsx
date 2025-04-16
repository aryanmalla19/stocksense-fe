import React from "react";
import { FaTrash } from "react-icons/fa";
import useDeleteWatchList from "../../hooks/stockshooks/useDeleteWatchList";
import { toast } from "react-hot-toast";

const Actionlist = ({ stockID, removeStock }) => {
  const { deleteWatchlist } = useDeleteWatchList();

  const handleClick = () => {
    deleteWatchlist.mutate(stockID, {
      onSuccess: () => {
        removeStock(stockID);
        toast.success("Removed from watchlist!");
      },
      onError: (error) => {
        toast.error("Failed to remove from watchlist.");
        console.error(error);
      },
    });
  };

  return (
    <div className="p-4">
      <ul className="space-y-2">
        <div className="flex gap-3">
          <button
            onClick={handleClick}
            className="text-red-500 hover:text-red-700 cursor-pointer"
            title="Delete"
          >
            <FaTrash />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Actionlist;
