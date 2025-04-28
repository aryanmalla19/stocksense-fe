import { useMutation } from "@tanstack/react-query";
import { ipoDetailsPost } from "../../api/adminApiService";
import toast from "react-hot-toast";

const useIPODetails = () => {
  const postMutation = useMutation({
    mutationFn: ipoDetailsPost,
    onSuccess: () => {
      toast.success("Stock Added successfully");
    },
    onError: (error) => {
      toast.error(`Failed to add stock: ${error.message}`);
    },
  });

  return {
    postMutation,
  };
};

export default useIPODetails;
