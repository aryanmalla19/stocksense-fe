import { useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { emailverify } from "../../api/userApi";

const useEmailverify = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: emailverify,
    onSuccess: () => {
      toast.success("Email verified successfully!");
      navigate("/login");
    },
    onError: (error) => {
      toast.error("Invalid or expired verification link.");
      console.log(error, "wdferf");
      navigate("/login");
    },
    // onSettled:() =>{}
  });
};

export default useEmailverify;
