import { useMutation } from "@tanstack/react-query";
import {
  deleteStockWatchList,
  postStockWatchList,
} from "../../api/watchlistapi";
import toast from "react-hot-toast";

const useAddWatchList = () => {
  const addMutation = useMutation({
    mutationFn: postStockWatchList,
    onSuccess: (data) => {
      console.log("Stock added to watchlist:", data);
      toast.success("Added to WatchList")
    },
    onError: (error) => {
      console.error("Error adding to watchlist:", error);
    },
  });

  const removeMutation = useMutation({
    mutationFn: deleteStockWatchList,
    onSuccess: (data) => {
      console.log("Stock removed from watchlist:", data);
      toast.success("Removed from WatchList")
    },
    onError: (error) => {
      console.error("Error removing from watchlist:", error);
    },
  });

  const addWatchList = (stockID, options) => {
    addMutation.mutate(stockID, options);
  };

  const removeWatchList = (stockID, options) => {
    removeMutation.mutate(stockID, options);
  };

  return {
    addWatchList,
    removeWatchList,
    isLoading: addMutation.isLoading || removeMutation.isLoading,
    isError: addMutation.isError || removeMutation.isError,
    error: addMutation.error || removeMutation.error,
    data: addMutation.data || removeMutation.data,
  };
};

export default useAddWatchList;
