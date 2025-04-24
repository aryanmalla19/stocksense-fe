import { useQuery } from "@tanstack/react-query";
import { Transactions } from "../../api/ipoApi";

const useTransactions = () => {
  const { data, refetch } = useQuery({
    queryKey: ["transactions"],
    queryFn: Transactions,
  });
  return { data, refetch };
};

export default useTransactions;
