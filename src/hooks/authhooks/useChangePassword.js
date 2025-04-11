import { useMutation } from "@tanstack/react-query";
import { changePassword } from "../../api/apiService";

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
  return { changePasswordMutation: mutation, isLoading: mutation.isLoading };
};

export default useChangePassword;
