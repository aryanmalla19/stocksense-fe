import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import SocialLogin from "../../authcomponent/SocialLogin";
import Rememberme from "../../authcomponent/Rememberme";
import Input from "../../components/stocks/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useLogin from "../../hooks/authhooks/useLogin";
import { useForm } from "react-hook-form";
import useAuthStore from "../../store/authStore";

const LoginPages = ({ isLoggedIn }) => {
  const [showPassword, setShowPassword] = useState(false);
  const token = useAuthStore((store) => store.token);
  const { mutate, serverErrors, isLoading, setServerErrors } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <form className="w-full max-w-[400px]" onSubmit={handleSubmit(onSubmit)}>
        {/* Email Field */}
        <Input
          {...register("email", { required: "Email is required" })}
          type="text"
          placeholder="Enter your email"
          icon={FaEnvelope}
          onChange={() => setServerErrors({})}
        />
        {errors.email && (
          <p className="text-red-600 my-2">*{errors.email.message}</p>
        )}

        {/* Password Field */}
        <Input
          {...register("password", { required: "Password is required" })}
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          icon={FaLock}
          showToggle
          onToggle={() => setShowPassword(!showPassword)}
          onChange={() => setServerErrors({})}
        />
        {errors.password && (
          <p className="text-red-600 my-2">*{errors.password.message}</p>
        )}

        <Rememberme />
        {serverErrors.general && (
          <p className="text-red-600 text-center my-4">
            *{serverErrors.general}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
          disabled={
            isLoading ||
            Object.keys(errors).length > 0 ||
            Object.keys(serverErrors).length > 0
          }
        >
          {isLoading ? <LoadingSpinner /> : "Login"}
        </button>

        <SocialLogin />
      </form>
    </div>
  );
};

export default LoginPages;