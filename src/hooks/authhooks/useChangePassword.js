import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../../api/stocksApiService";

const useChangePassword = () => {
  const mutation = useMutation({
    mutationFn: changePassword,
    onSuccess: (data) => {
      console.log("Password change success", data);
    },
    onError: (error) => {
      console.error("Password change failed:", error);
    },
  });
  return { resetPasswordMutation: mutation, isLoading: mutation.isLoading };
};

export default useChangePassword;
