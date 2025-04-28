import { useMutation } from "@tanstack/react-query";
import { ipoDetailsDelete } from "../../api/adminApiService";
import toast from "react-hot-toast";

const useIPODelete = () => {
  const deleteMutation = useMutation({
    mutationFn: (id) => ipoDetailsDelete(id),
    onSuccess: () => {
      toast.success("Successfully delete the stocks");
    },
    onError: () => {
      toast.error("Failed to delete the stocks");
    },
  });
  return { deleteMutation };
};

export default useIPODelete;
