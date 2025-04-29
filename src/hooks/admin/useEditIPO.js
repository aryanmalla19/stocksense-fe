import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { ipoDetailsEdit } from "../../api/adminApiService";

const useEditIPO = () => {
  const editIPOMutate = useMutation({
    mutationFn: (data) => ipoDetailsEdit(data),
    onSuccess: (data) => {
      console.log("Edit Success:", data);
      toast.success("Successfully edited the stocks");
    },
    onError: (error) => {
      console.error("Edit Error:", error);
      toast.error("Failed to edit the stocks");
    },
  });

  return { editIPOMutate };
};

export default useEditIPO;
