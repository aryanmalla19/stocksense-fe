import { useQuery } from "@tanstack/react-query";
import { history } from "../../api/stocksApiService";

const useHistoryID = (id) => {
  const {
    data: historyData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["history", id],
    queryFn: () => history(id),
    enabled: !!id,
  });

  return { historyData, isLoading, error };
};

export default useHistoryID;
