import { useQuery } from "@tanstack/react-query";
import { Holdings } from "../../api/ipoApi";

const useGetHoldings = () => {
  const { data, refetch } = useQuery({
    queryKey: ["holdings"],
    queryFn: Holdings,
  });
  return { data, refetch };
};

export default useGetHoldings;
