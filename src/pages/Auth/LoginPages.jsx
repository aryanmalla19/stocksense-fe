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
import GoogleLoginButton from "../../authcomponent/GoogleLoginButton";

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { mutate, serverErrors, isLoading, setServerErrors } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = (data) => {
    mutate(data);
  };

  const accessToken = useAuthStore((store) => store.accessToken);
  if (accessToken) {
    return <Navigate to="/dashboard" />;
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
          autoComplete="email"
          onChange={() => setServerErrors({})}
          error={errors.email}
        />
        {(errors.email || serverErrors?.email) && (
          <p className="text-red-500 text-sm my-2 animate-fade-in">
            *{errors.email?.message || serverErrors?.email}
          </p>
        )}

        {/* Password Field */}
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          icon={FaLock}
          autoComplete="current-password"
          showToggle
          onToggle={() => setShowPassword(!showPassword)}
          onChange={() => setServerErrors({})}
          error={errors.password}
        />
        {(errors.password || serverErrors?.password) && (
          <p className="text-red-500 text-sm my-2 animate-fade-in">
            *{errors.password?.message || serverErrors?.password}
          </p>
        )}

        <Rememberme />

        {/* Submit Button */}
        <button
          type="submit"
          className="auth-button cursor-pointer bg-gradient-to-l from-[#923EB9] to-[#732E92] hover:from-[#A24DCC] hover:to-[#8336A8] transition duration-200 w-full"
          disabled={isLoading}
        >
          {isLoading ? <LoadingSpinner /> : "Login"}
        </button>

        <GoogleLoginButton key="login-google" />
      </form>
    </div>
  );
};

export default LoginPages;
