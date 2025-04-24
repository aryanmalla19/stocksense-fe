import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../../api/apiService";
import { useState } from "react";

const useRegister = () => {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState({});

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      toast.success("Registration successful!");
      const email = data?.user?.email;
      if (email) {
        localStorage.setItem("userEmail", email);
      }
      navigate("/confirmation");
    },
    onError: (error) => {
      setServerErrors(error.errors || {});
      toast.error("Registration failed");
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    serverErrors,
    setServerErrors,
  };
};

export default useRegister;
