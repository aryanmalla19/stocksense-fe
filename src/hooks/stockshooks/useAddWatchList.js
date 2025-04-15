import { useMutation } from "@tanstack/react-query";
import { postStockWatchList } from "../../api/stocksApiService";

const useAddWatchList = () => {
  const mutation = useMutation({
    mutationFn: postStockWatchList,
    onSuccess: (data) => {
      console.log("Stock added to watchlist:", data);
    },
    onError: (error) => {
      console.error("Error adding to watchlist:", error);
    },
  });
  const addWatchList = (stockID) => {
    mutation.mutate(stockID);
  };

  return {
    addWatchList,
    isLoading: mutation.isLoading,
    isError: mutation.isError,
    error: mutation.error,
    data: mutation.data,
  };
};

export default useAddWatchList;
