import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { registerUser } from "../api/apiService";

const useRegister = () => {
  const [input, setInput] = useState({ name: "", email: "", password: "", password_confirmation: "" });
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      alert("Registration successful!");
    },
    onError: (err) => {
      setError(err.response?.data?.message || "Registration failed");
    },
  });

  return { input, handleChange, error, loading: isLoading, mutate };
};

export default useRegister;
