import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../../api/apiService";

const useResetPassword = () => {
  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("Password reset success", data);
    },
    onError: (error) => {
      console.error("Password reset link failed:", error);
    },
  });
  return { resetPasswordmutation: mutation, isLoading: mutation.isLoading };
};

export default useResetPassword;
