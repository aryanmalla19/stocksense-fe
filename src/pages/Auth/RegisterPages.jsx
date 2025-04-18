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
        {errors.name && (
          <p className="text-red-500 text-sm my-2">*{errors.name.message}</p>
        )}
        {serverErrors?.name && (
          <p className="text-red-500 text-sm my-2">*{serverErrors.name[0]}</p>
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
          autoComplete="email"
          onChange={() => setServerErrors({})}
        />
        {errors.email && (
          <p className="text-red-500 text-sm my-2">*{errors.email.message}</p>
        )}
        {serverErrors?.email && (
          <p className="text-red-500 text-sm my-2">*{serverErrors.email[0]}</p>
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
          autoComplete="password"
          showToggle
          onToggle={() => setShowPassword(!showPassword)}
          onChange={() => setServerErrors({})}
        />
        {errors.password && (
          <p className="text-red-500 text-sm my-2">
            *{errors.password.message}
          </p>
        )}
        {serverErrors?.password && (
          <p className="text-red-500 text-sm my-2">
            *{serverErrors.password[0]}
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
          autoComplete="confirmpassword"
          showToggle
          onToggle={() => setShowPassword(!showPassword)}
          onChange={() => setServerErrors({})}
        />
        {errors.password_confirmation && (
          <p className="text-red-500 text-sm my-2">
            *{errors.password_confirmation.message}
          </p>
        )}

        {/* General Server Error */}
        {serverErrors?.general && (
          <p className="text-red-500 text-sm my-2 text-center">
            *{serverErrors.general}
          </p>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
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
