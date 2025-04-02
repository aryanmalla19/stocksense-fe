import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { registerUser } from "../api/ApiService";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const useRegister = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput((prevInput) => ({
      ...prevInput,
      [e.target.name]: e.target.value,
    }));
  };

  const { mutate, isLoading } = useMutation({
    mutationFn: registerUser,
    onSuccess: () => {
      toast.success("Registration successful!");
      navigate("/confirmation"); // ✅ Navigate to confirmation page
    },
    onError: (err) => {
      const errorMessage =
        err.response?.data?.message || err.message || "Registration failed";
      setError(errorMessage);
      toast.error(errorMessage); // ✅ Show error as toast
    },
  });

  return { input, handleChange, error, loading: isLoading, mutate };
};

export default useRegister;
