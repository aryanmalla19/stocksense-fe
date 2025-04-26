import { useQuery } from "@tanstack/react-query";
import { Holdings } from "../../api/ipoApi";

const useGetHoldings = () => {
  const { data, refetch } = useQuery({
    queryKey: ["holdings"],
    queryFn: Holdings,
    staleTime: 0,
    keepPreviousData: false,
  });
  return { data, refetch };
};

export default useGetHoldings;
