import { useQuery } from "@tanstack/react-query";
import { searchQuery } from "../../api/stocksApiService";

const useSearchStock = (searchText) => {
  const { data, refetch, isLoading, isError, error } = useQuery({
    queryKey: ["stocks", searchText],
    queryFn: () => searchQuery(searchText),
    enabled: !!searchText,
  });

  return { data, refetch, isLoading, isError, error };
};

export default useSearchStock;
