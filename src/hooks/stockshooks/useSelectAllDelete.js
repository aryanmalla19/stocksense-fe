import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteAllStock } from "../../api/watchlistapi";

const useSelectAllDelete = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: deleteAllStock,
    onSuccess: () => {
      console.log("WatchList deleted successfully");
      queryClient.invalidateQueries({ queryKey: ["watchlist"] });
    },
    onError: (error) => {
      console.error("Error deleting stocks watchlist:", error);
    },
  });
  return { alldeleteWatchlist: mutation };
};

export default useSelectAllDelete;
