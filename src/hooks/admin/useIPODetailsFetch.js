import { useQuery } from "@tanstack/react-query";
import { ipoDetailsFetch } from "../../api/adminApiService";

const useIPODetailsFetch = () => {
  const { data } = useQuery({
    queryKey: ["ipo-fetch"],
    queryFn: ipoDetailsFetch,
  });
  return { data };
};

export default useIPODetailsFetch;
