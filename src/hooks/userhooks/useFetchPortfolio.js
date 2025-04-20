import { useQuery } from "@tanstack/react-query";
import { UserPortfolio } from "../../api/stocksApiService";

const useFetchPortfolio = () => {
  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["user-portfolio"],
    queryFn: UserPortfolio, 
    onSuccess: (data) => {
      console.log("Successfully fetched all portfolio data", data);
    },
    onError: (error) => {
      console.error("Error fetching stocks portfolio:", error);
    },
  });

  return {
    data,
    isLoading,
    error,
    refetch,
  };
};

export default useFetchPortfolio;
