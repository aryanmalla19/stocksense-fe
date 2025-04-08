import React from "react";
import useAuthStore from "../store/authStore";

const useAuth = () => {
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const clearToken = useAuthStore((state) => state.clearToken);

  const login = (newToken) => {
    setToken(newToken);
  };

  const logout = () => {
    clearToken;
  };

  return { login, logout, token };
};

export default useAuth;
