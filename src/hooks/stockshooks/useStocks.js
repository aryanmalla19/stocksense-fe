import { useQuery } from "@tanstack/react-query";
import { stockList } from "../../api/stocksApiService";

const useStocks = (searchSymbol = "", pageNumber = 1, per_page = 10) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stocks", pageNumber, searchSymbol],
    queryFn: () => stockList({ page: pageNumber, per_page: per_page }),
    keepPreviousData: true,
  });
  if (isLoading) return { stocks: [], isLoading, isError };
  if (isError) return { stocks: [], isLoading, isError };

  return { data, isLoading, isError };
};

export default useStocks;
