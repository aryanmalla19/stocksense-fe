import { useMutation } from "@tanstack/react-query";
import { verifyOTP } from "../../api/apiService";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


const useVerifyOtp = () => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: verifyOTP,
    onSuccess: (data) => {
    console.log(data);
      console.log("OTP verified", data);

      const token = data?.access_token;

      if (token) {
        login(token);
        toast.success("Login successful");
        navigate("/");
      } else {
        toast.error("Access token not found in response.");
      }
    },
    onError: (error) => {
      console.error("OTP verification failed:", error);
    },
  });
  return { otpVerifymutation: mutation, isLoading: mutation.isLoading };
};

export default useVerifyOtp;
