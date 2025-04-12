import { useMutation } from "@tanstack/react-query";
import { fetchStockWatchList } from "../../api/stocksApiService";

const useFetchWatchList = () => {
  const mutation = useMutation({
    mutationFn: fetchStockWatchList,
    onSuccess: (data) => {
      console.log("Successfully fetched all watchlist data", data);
    },
    onError: (error) => {
      console.error("Error fetching stocks watchlist:", error);
    },
  });
  return {
    fetchWatchList: mutation,
    isLoading: mutation.isLoading,
    error: mutation.error,
  };
};

export default useFetchWatchList;
