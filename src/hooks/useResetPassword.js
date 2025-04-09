import { useMutation } from "@tanstack/react-query";
import { resetPassword } from "../api/apiService";

const useResetPassword = () => {
  const mutation = useMutation({
    mutationFn: resetPassword,
    onSuccess: (data) => {
      console.log("Password reset success:", data);
    },
    onError: (error) => {
      console.error("Password reset failed:", error);
    },
  });
  return {
    resetPasswordMutation: mutation,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useResetPassword;
