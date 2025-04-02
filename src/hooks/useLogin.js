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
      console.error("Error response:", error.response);

      if (error.response?.status === 401) {
        setServerErrors({ general: error.response.data.error });
      } else {
        const errorMessage =
          error.response?.data?.message || error.message || "Login failed";
        setServerErrors({ general: errorMessage });
      }

      toast.error(serverErrors.general || "Login failed");
    },
  });

  return {
    mutate: mutation.mutate,
    serverErrors,
    isLoading: mutation.isPending,
  };
};

export default useLogin;
