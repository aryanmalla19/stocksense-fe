import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useResetPassword from "../../hooks/authhooks/useResetPassword";
import { useSearchParams } from "react-router-dom";

const ResetPassword = () => {
  const { resetPasswordmutation, isLoading } = useResetPassword();
  const [searchParams] = useSearchParams();

  // Correctly accessing query parameters
  const token = searchParams.get("token");
  const email = searchParams.get("email");

  console.log("Token:", token); // Log token
  console.log("Email:", email); // Log email

  const [password, setPassword] = useState("");
  const [password_confirmation, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password !== password_confirmation) {
      toast.error("New passwords do not match!");
      return;
    }

    // Ensure mutation is defined before calling mutate
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
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form
        className="bg-white p-8 rounded-lg shadow-md w-full max-w-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Change Password</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-teal-400"
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            value={password_confirmation}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full border border-gray-300 px-3 py-2 rounded-md focus:outline-none focus:ring focus:ring-teal-400"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Change Password"}
        </button>
      </form>
    </div>
  );
};

export default ResetPassword;
