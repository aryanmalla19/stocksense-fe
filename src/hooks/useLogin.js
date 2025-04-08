// src/hooks/useLogin.js
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { loginUser } from "../api/apiService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const useLogin = () => {
  const [serverErrors, setServerErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
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
      setServerErrors({});
      const errorMessage =
        error?.error || "Login failed. Please try again later.";
      setServerErrors({ general: errorMessage });
      toast.error(errorMessage);
    },
  });

  return {
    mutate: mutation.mutate,
    serverErrors,
    isLoading: mutation.isPending,
    setServerErrors,
  };
};

export default useLogin;
