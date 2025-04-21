import { useMutation } from "@tanstack/react-query";
import { buySell } from "../../api/ipoApi";
import toast from "react-hot-toast";

const useBuySell = () => {
  const buySellMutation = useMutation({
    mutationFn: buySell,
    onSuccess: () => {
      toast.success("Stocks transaction successful");
    },
    onError: (error) => {
      toast.error(error?.message || "Failed to buy/sell stock");
    },
  });

  return {
    buySellData: buySellMutation.mutate,
    isLoading: buySellMutation.isLoading,
  };
};

export default useBuySell;
