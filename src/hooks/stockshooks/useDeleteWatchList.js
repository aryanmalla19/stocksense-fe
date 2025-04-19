import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteStockWatchList } from "../../api/watchlistapi";

const useDeleteWatchList = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteStockWatchList,
    onSuccess: () => {
      console.log("WatchList deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
    onError: (error) => {
      console.error("Error deleting stocks watchlist:", error);
    },
  });
  return { deleteWatchlist: mutation };
};

export default useDeleteWatchList;
