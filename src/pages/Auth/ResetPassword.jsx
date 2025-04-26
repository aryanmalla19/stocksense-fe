import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useResetPassword from "../../hooks/authhooks/useResetPassword";
import { useNavigate, useSearchParams } from "react-router-dom";
import { FiLock, FiArrowRight } from "react-icons/fi";
import resetPassImg from "../../assets/change.png";

const ResetPassword = () => {
  const { resetPasswordmutation } = useResetPassword();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const token = searchParams.get("token");
  const email = searchParams.get("email");

  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      toast.error("New passwords do not match!");
      return;
    }

    if (!resetPasswordmutation) {
      console.error("resetPasswordMutation is not defined");
      return;
    }

    resetPasswordmutation.mutate(
      {
        password,
        password_confirmation,
        token,
        email,
      },
      {
        onSuccess: () => {
          toast.success("Password changed successfully!");
          navigate("/login");
          setPassword("");
          setConfirmPassword("");
        },
        onError: (error) => {
          toast.error("Failed to change password: " + error.message);
        },
      }
    );
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center py-5">
        <img
          src={resetPassImg}
          alt="Reset Password"
          className="w-65 h-65 mx-auto mb-6"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Reset Your Password
        </h2>
        <p className="text-gray-600">Create a new password for your account</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 w-full max-w-md">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="New Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:none"
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiLock className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm New Password"
            className="w-full pl-10 pr-4 py-3 border border-gray-500 rounded-lg focus:ring-2 focus:none"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-button cursor-pointer text-white font-medium transition duration-200"
        >
          Change Password
          <FiArrowRight className="ml-2" />
        </button>
      </form>

      <p className="text-center text-xl text-gray-500 mt-5">
        Remember your password?{" "}
        <a
          href="/login"
          className="text-indigo-600 hover:text-indigo-800 font-semibold"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default ResetPassword;
