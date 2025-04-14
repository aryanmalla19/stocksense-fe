// useFetchStocksID.js
import { useQuery } from "@tanstack/react-query";
import { fetchStockBYId } from "../../api/stocksApiService";

const useFetchStocksID = (stockId) => {
  const { data, refetch, isLoading, error } = useQuery({
    queryKey: ["stock", stockId],
    queryFn: () => fetchStockBYId(stockId),
    enabled: !!stockId,
    onSuccess: (data) => {
      console.log("Successfully fetched stock by id", data);
    },
    onError: (error) => {
      console.log("Error fetching stock by id", error);
    },
  });

  return { data, refetch, isLoading, error };
};

export default useFetchStocksID;
