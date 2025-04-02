import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { registerUser } from "../api/ApiService";
import { useState } from "react";

const useRegister = () => {
  const navigate = useNavigate();
  const [serverErrors, setServerErrors] = useState({});

  const mutation = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful!");
      setTimeout(() => {
        navigate("/confirmation");
      }, 1000);
    },
    onError: (error) => {
      if (error.response?.status === 422) {
        // If backend sends errors in "errors" object, extract them
        setServerErrors(error.response.data.errors || {});
      } else {
        const errorMessage =
          error.response?.data?.message ||
          error.message ||
          "Registration failed";
        setServerErrors({ general: errorMessage });
        toast.error(errorMessage);
      }
    },
  });

  return {
    mutate: mutation.mutate,
    isLoading: mutation.isPending,
    serverErrors,
  };
};

export default useRegister;
