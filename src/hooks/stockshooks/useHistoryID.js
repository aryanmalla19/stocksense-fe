import { useQuery } from "@tanstack/react-query";
import { history } from "../../api/stocksApiService";

const useHistoryID = (id) => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["history", id],
    queryFn: () => history(id),
    enabled: !!id,
  });

  return { historyData: data, isLoading, error };
};

export default useHistoryID;
