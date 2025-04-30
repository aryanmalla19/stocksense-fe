import { useQuery } from "@tanstack/react-query";
import { stockList } from "../../api/stocksApiService";

export const useStocks = ({ searchSymbol = "", pageNumber = 1, per_page = 10, listed = true }) => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["stocks", pageNumber, searchSymbol],
    queryFn: () => stockList({ page: pageNumber, per_page: per_page, symbol:searchSymbol, listed: listed }),
    keepPreviousData: true,
  });

  return { data, isLoading, isError };
};
