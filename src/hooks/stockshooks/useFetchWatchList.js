import { useQuery } from "@tanstack/react-query";
import { fetchStockWatchList } from "../../api/stocksApiService";

const useFetchWatchList = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["watch-list"],
    queryFn: fetchStockWatchList,
    onSuccess: (data) => {
      console.log("Successfully fetched all watchlist data", data);
    },
    onError: (error) => {
      console.error("Error fetching stocks watchlist:", error);
    },
  });

  return {
    watchList: data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetchWatchList;
