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
      if (data?.private_token){
        navigate("/otp");
        Cookies.set("private_token", data['private_token']);
      }

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
      // console.log(error);
      if(error.errors){
        setServerErrors(error.errors);
        toast.error("Login failed");
        return;
      }
      toast.error(error.error);
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