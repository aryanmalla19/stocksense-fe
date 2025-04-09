import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useForgotPassword from "../../hooks/authhooks/useForgotPassword";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPasswordMutation, isLoading } = useForgotPassword();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger password reset mutation
    forgotPasswordMutation.mutate(
      { email },
      {
        onSuccess: () => {
          toast.success(
            "Reset instructions have been sent to your email! Please check your inbox."
          );
          setEmail("");
        },
        onError: (err) => {
          toast.error(err?.message || "User Email does not exist!");
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-[500px]">
        <div className="flex flex-col items-center mb-6">
          <img
            src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-illustration-download-in-svg-png-gif-file-formats--lock-pin-security-crime-illustrations-2368063.png"
            alt="Forgot Password"
            className="w-90 h-80"
          />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">
            Forgot password?
          </h1>
          <p className="text-gray-600 text-center">
            No worries, we’ll send you reset instructions to your email.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-700 mb-1"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "Send Reset Link"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
