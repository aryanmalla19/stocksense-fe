import { useMutation, useQueryClient } from "@tanstack/react-query";
import { buySell } from "../../api/ipoApi";
import toast from "react-hot-toast";

const useBuySell = () => {
  const queryClient = useQueryClient();

  const buySellMutation = useMutation({
    mutationFn: buySell,
    onSuccess: () => {
      toast.success("Stocks transaction successful");

      queryClient.invalidateQueries(["holdings"]);
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
