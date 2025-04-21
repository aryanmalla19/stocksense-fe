import { useQuery } from "@tanstack/react-query";
import { Holdings } from "../../api/ipoApi";

const useGetTransaction = () => {
  const { data } = useQuery({
    queryKey: ["holdings"],
    queryFn: Holdings,
  });
  return { data };
};

export default useGetTransaction;
