import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { loginUser } from "../api/apiService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [serverErrors, setServerErrors] = useState({});
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Login successful");
      navigate("/");
    },
    onError: (error) => {
      // Clear previous errors
      setServerErrors({});

      // Get error message from API or use default
      const errorMessage =
        error.response?.data?.error || "Login failed. Please try again later.";

      // Set as a general error
      setServerErrors({ general: errorMessage });

      // Show toast
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    serverErrors,
    isLoading: mutation.isPending,
  };
};

export default useLogin;
