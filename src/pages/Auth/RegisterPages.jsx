import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialLogin from "../../authcomponent/SocialLogin";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import useRegister from "../../hooks/authhooks/useRegister";
import Input from "../../components/stocks/Input";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useAuthStore from "../../store/authStore";

const RegisterPages = () => {
  const [showPassword, setShowPassword] = useState(false);
  const token = useAuthStore((store) => store.token);
  const { mutate, isLoading, serverErrors, setServerErrors } = useRegister();
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
    <div>
      <form className="w-[380px]" onSubmit={handleSubmit(onSubmit)}>
        {/* Name Field */}
        <Input
          {...register("name", {
            required: "Name is required",
            pattern: {
              value: /^[A-Za-z\s]+$/,
              message: "Only letters are allowed",
            },
          })}
          type="text"
          placeholder="Enter Name"
          icon={FaUser}
          onChange={() => setServerErrors({})}
        />
      {(errors.name || serverErrors?.name) && (
          <p className="text-red-500 text-sm my-2 animate-fade-in">
          *{errors.name?.message || serverErrors?.name}
          </p>
        )}

        {/* Email Field */}
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address",
            },
          })}
          type="email"
          placeholder="Enter your email"
          icon={FaEnvelope}
          onChange={() => setServerErrors({})}
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
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
          placeholder="Enter your password"
          type={showPassword ? "text" : "password"}
          icon={FaLock}
          showToggle
          onToggle={() => setShowPassword(!showPassword)}
          onChange={() => setServerErrors({})}
        />

        {(errors.password || serverErrors?.password) && (
          <p className="text-red-500 text-sm my-2 animate-fade-in">
          *{errors.password?.message || serverErrors?.password}
          </p>
        )}

        {/* Confirm Password Field */}
        <Input
          {...register("password_confirmation", {
            required: "Please confirm your password",
            validate: (value) =>
              value === watch("password") || "Passwords do not match",
          })}
          placeholder="Confirm Password"
          type={showPassword ? "text" : "password"}
          icon={FaLock}
          showToggle
          onToggle={() => setShowPassword(!showPassword)}
          onChange={() => setServerErrors({})}
        />
        {(errors.password_confiration || serverErrors?.password_confiration) && (
          <p className="text-red-500 text-sm my-2 animate-fade-in">
          *{errors.password_confiration?.message || serverErrors?.password_confiration}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
          disabled={isLoading}
        >
          {isLoading ? (
            <LoadingSpinner className="h-5 w-5 text-white" />
          ) : (
            "Sign Up"
          )}
        </button>
        <SocialLogin />
      </form>
    </div>
  );
};

export default RegisterPages;