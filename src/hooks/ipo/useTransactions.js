import { useQuery } from "@tanstack/react-query";
import { Transactions } from "../../api/ipoApi";

const useTransactions = (pageNumber = 1) => {
  const { data, refetch } = useQuery({
    queryKey: ["transactions", pageNumber],
    queryFn: () => Transactions(pageNumber),
    keepPreviousData: true,
  });
  return { data, refetch };
};

export default useTransactions;
