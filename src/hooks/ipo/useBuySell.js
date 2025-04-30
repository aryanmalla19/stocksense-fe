import { useMutation, useQueryClient } from "@tanstack/react-query";
import { buySell } from "../../api/ipoApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useBuySell = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  const buySellMutation = useMutation({
    mutationFn: buySell,
    onSuccess: async () => {
      toast.success("Stocks transaction successful");
      queryClient.invalidateQueries({ queryKey: ["holdings"] });
      navigate("/portfolio/holdings");
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to buy/sell stock");
    },
  });

  return {
    buySellData: buySellMutation.mutateAsync,
    isLoading: buySellMutation.isLoading,
  };
};

export default useBuySell;
