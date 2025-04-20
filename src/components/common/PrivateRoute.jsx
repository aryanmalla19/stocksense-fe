import React from "react";
import { Navigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";
import LoadingSpinner from "./LoadingSpinner";

const PrivateRoute = ({ children }) => {
  const token = useAuthStore((state) => state.accessToken);
  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return <LoadingSpinner />;
  }
  if (!token) {
    return <Navigate to="/login" replace />;
  }

  // If token exists, render the protected component
  return children;
};

export default PrivateRoute;
