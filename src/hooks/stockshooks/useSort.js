import { useQuery } from "@tanstack/react-query";
import { sortStocks } from "../../api/stocksApiService";

const useSort = (sortBy, sortOrder, page=1) => {
  return useQuery({
    queryKey: ["stocks", { sortBy, sortOrder, page }],
    queryFn: ({ queryKey }) => {
      const [, { sortBy, sortOrder, page }] = queryKey;
      return sortStocks(sortBy, sortOrder, page);
    },
    keepPreviousData: true,
  });
};

export default useSort;
