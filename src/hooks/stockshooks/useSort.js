import { useQuery } from "@tanstack/react-query";
import { sortStocks } from "../../api/stocksApiService";

const useSort = (sortBy, sortOrder, page = 1) => {
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey: ["stocks", { sortBy, sortOrder, page }],
    queryFn: ({ queryKey }) => {
      const [, { sortBy, sortOrder, page }] = queryKey;
      return sortStocks(sortBy, sortOrder, page);
    },
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
  };
};

export default useSort;
