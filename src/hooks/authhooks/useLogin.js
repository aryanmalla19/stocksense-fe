import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { loginUser } from "../../api/apiService";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";
import Cookies from "js-cookie";

const useLogin = () => {
  const [serverErrors, setServerErrors] = useState({});
  const navigate = useNavigate();
  const { login } = useAuth();

  const mutation = useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      const privateToken = data?.private_token;
      const accessToken = data?.access_token;
      const refreshToken = data?.refresh_token;

      if (privateToken) {
        Cookies.set("private_token", privateToken);
        navigate("/otp");
        return;
      }

      if (accessToken && refreshToken) {
        login(accessToken, refreshToken);
        toast.success("Login successful");

        navigate("/dashboard");
      } else {
        toast.error("Access token not found in response.");
      }
    },
    onError: (error) => {
      if (error?.errors) {
        setServerErrors(error.errors);
      } else {
        setServerErrors(error.error);
        toast.error(error?.error || "An unexpected error occurred");
      }
    },
  });

  return {
    mutate: mutation.mutate,
    serverErrors,
    setServerErrors,
    isLoading: mutation.isPending,
  };
};

export default useLogin;
