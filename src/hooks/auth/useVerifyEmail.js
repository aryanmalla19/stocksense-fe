import { useMutation } from "@tanstack/react-query";
import { verifyEmail } from "../../api/apiService";
import { toast } from "react-hot-toast";

const useVerifyEmail = () => {
  const mutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess: () =>
      toast.success("Verification email resent successfully!", {}),
    onError: () => toast.error("Failed to resend email.", {}),
  });

  return {
    resentLink: mutation,
    isLoading: mutation.isLoading,
  };
};

export default useVerifyEmail;
