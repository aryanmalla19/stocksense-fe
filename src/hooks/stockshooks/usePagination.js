import { useQuery } from "@tanstack/react-query";
import { pagination } from "../../api/stocksApiService";

const usePagination = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["pagination"],
    queryFn: pagination,
    onError: (err) => {
      console.error("Pagination fetch error:", err);
    },
  });
  return { paginationData: data, isLoading, error, refetch };
};

export default usePagination;
