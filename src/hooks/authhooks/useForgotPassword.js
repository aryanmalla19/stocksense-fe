import { useMutation } from "@tanstack/react-query";
import { forgotPassword } from "../../api/apiService";

const useForgotPassword = () => {
  const mutation = useMutation({
    mutationFn: forgotPassword,
    onSuccess: (data) => {
      console.log("Password reset link sent:", data);
    },
    onError: (error) => {
      console.error("Password reset link failed:", error);
    },
  });
  return {
    forgotPasswordMutation: mutation,
    isLoading: mutation.isLoading,
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
    error: mutation.error,
  };
};

export default useForgotPassword;
