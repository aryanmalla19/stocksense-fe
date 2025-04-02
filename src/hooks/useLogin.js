import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";
import { loginUser } from "../api/ApiService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useLogin = () => {
  const [input, setInput] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: loginUser,
    onSuccess: () => {
      toast.success("Login successful!");

      //redirect to dashboard
      navigate("/");
    },
    onError: (err) => {
      console.error("Login error:", err);
      setError(err?.response?.data?.message || "Login failed");
    },
  });

  return { input, handleChange, error, loading: isLoading, mutate };
};

export default useLogin;
