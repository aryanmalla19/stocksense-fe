import { useQuery } from "@tanstack/react-query";
import { sortStocks } from "../../api/stocksApiService";

const useSort = (sortBy, sortOrder) => {
  return useQuery({
    queryKey: ["stocks", { column: sortBy, dir: sortOrder }],
    queryFn: sortStocks,
    keepPreviousData: true,
  });
};

export default useSort;
