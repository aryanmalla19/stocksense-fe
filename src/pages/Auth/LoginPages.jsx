import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import SocialLogin from "../../authcomponent/SocialLogin";
import Rememberme from "../../authcomponent/Rememberme";
import LoginHeader from "../../authcomponent/LoginHeader";
import Input from "../../components/stocks/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useLogin from "../../hooks/useLogin";
import { useForm } from "react-hook-form";
import Passwordhidded from "../../components/common/Passwordhidded";
import useAuthStore from "../../store/authStore";

const LoginPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  const token = useAuthStore((store) => store.token);
  const { mutate, serverErrors, isLoading } = useLogin();

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
    <div className="flex min-h-full">
      <div className="auth-bg w-1/2 pt-5">
        <div className="auth-container">
          <LoginHeader />
          <form
            className="space-y-4 mx-40 my-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Email Field */}
            <label className="font-medium ml-2 text-lg" htmlFor="email">
              Email
            </label>
            <Input
              {...register("email", { required: "Email is required" })}
              type="text"
              placeholder="Enter your email"
              icon={FaEnvelope}
            />
            {errors.email && (
              <p className="text-red-600">{errors.email.message}</p>
            )}
            {serverErrors?.email && (
              <p className="text-red-500">{serverErrors.email}</p>
            )}

            {/* Password Field */}
            <label className="font-medium ml-2 text-lg" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Input
                {...register("password", { required: "Password is required" })}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                icon={FaLock}
              />
              <Passwordhidded
                isVisible={showPassword}
                toggleVisibility={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
            {serverErrors?.password && (
              <p className="text-red-500">{serverErrors.password}</p>
            )}

            <Rememberme />
            {serverErrors.general && (
              <p className="text-red-600 text-center">{serverErrors.general}</p>
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
            <div className="text-center">
              <p>
                Don't have an account?
                <Link
                  to="/register"
                  className="text-teal-500 ml-1 font-semibold hover:underline"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-teal-800 min-h-screen"></div>
    </div>
  );
};

export default LoginPages;
