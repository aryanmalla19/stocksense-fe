import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../authcomponent/SocialLogin";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import RegisterHeader from "../../authcomponent/RegisterHeader";
import useRegister from "../../hooks/useRegister";
import Input from "../../components/stocks/Input";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import Passwordhidded from "../../components/common/Passwordhidded";
import useAuthStore from "../../store/authStore";

const RegisterPages = () => {
  // State to toggle password visibility
  const [showPassword, setShowPassword] = useState(false);
  const token = useAuthStore((store) => store.token);
  const { mutate, isLoading, serverErrors } = useRegister();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };

  if (token) {
    return <Navigate to="/" replace />;
  }
  return (
    <div className="flex">
      <div className="w-1/2 bg-teal-800 pt-5"></div>
      <div className="auth-bg w-1/2 flex items-center justify-center">
        <div className="auth-container">
          <RegisterHeader />
          <form
            className="space-y-4 mx-30 my-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            {/* Name Field */}
            <label className="font-medium ml-2 text-lg" htmlFor="name">
              Name
            </label>
            <Input
              {...register("name", {
                required: "Name is required",
                pattern: {
                  value: /^[A-Za-z\s]+$/,
                  message: "Only letters are allowed",
                },
              })}
              type="text"
              placeholder="Name"
              icon={FaUser}
            />
            {errors.name && (
              <p className="text-red-500">{errors.name.message}</p>
            )}
            {serverErrors?.name && (
              <p className="text-red-500">{serverErrors.name[0]}</p>
            )}

            {/* Email Field */}
            <label className="font-medium ml-2 text-lg" htmlFor="email">
              Email
            </label>
            <Input
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
              type="email"
              placeholder="Email"
              icon={FaEnvelope}
            />
            {errors.email && (
              <p className="text-red-500">{errors.email.message}</p>
            )}
            {serverErrors?.email && (
              <p className="text-red-500">{serverErrors.email[0]}</p>
            )}

            {/* Password Field */}
            <label className="font-medium ml-2 text-lg" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <Input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 8,
                    message: "Password must be at least 8 characters",
                  },
                })}
                placeholder="Password"
                type={showPassword ? "text" : "password"}
                icon={FaLock}
              />
              <Passwordhidded
                isVisible={showPassword}
                toggleVisibility={() => setShowPassword(!showPassword)}
              />
            </div>
            {errors.password && (
              <p className="text-red-500">{errors.password.message}</p>
            )}
            {serverErrors?.password && (
              <p className="text-red-500">{serverErrors.password[0]}</p>
            )}

            {/* Confirm Password Field */}
            <label
              className="font-medium ml-2 text-lg"
              htmlFor="password_confirmation"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Input
                {...register("password_confirmation", {
                  required: "Please confirm your password",
                  validate: (value) =>
                    value === watch("password") || "Passwords do not match",
                })}
                placeholder="Confirm Password"
                type={showPassword ? "text" : "password"}
                icon={FaLock}
              />
              <Passwordhidded
                isVisible={showPassword}
                toggleVisibility={() => setShowPassword(!showPassword)}
              />
            </div>

            {errors.password_confirmation && (
              <p className="text-red-500">
                {errors.password_confirmation.message}
              </p>
            )}

            {/* General Backend Error Message */}
            {serverErrors?.general && (
              <p className="text-red-500 text-center">{serverErrors.general}</p>
            )}

            <button
              type="submit"
              className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
              disabled={isLoading}
            >
              {isLoading ? <LoadingSpinner /> : "Signup"}
            </button>

            <SocialLogin />

            <div className="text-center">
              <p>
                Already have an account?
                <Link
                  to="/login"
                  className="text-teal-500 ml-1 hover:underline"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterPages;
