import React, { useState } from "react";
import useResetPassword from "../../hooks/useResetPassword";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { resetPasswordMutation, isLoading } = useResetPassword();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Trigger password reset mutation
    resetPasswordMutation.mutate(
      { email },
      {
        onSuccess: () => {
          setMessage(" Reset instructions have been sent to your email!");
          setEmail("");
        },
        onError: (err) => {
          setErrorMessage(
            err?.message || "An error occurred. Please try again."
          );
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
            className="w-90 h-80 "
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
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
            disabled={isLoading}
          >
            {isLoading ? <LoadingSpinner /> : "Send Reset Link"}
          </button>
        </form>

        {message && (
          <p className="text-center mt-4 text-sm font-medium text-green-600">
            {message}
          </p>
        )}

        {errorMessage && (
          <p className="text-center mt-4 text-sm font-medium text-red-600">
            {errorMessage}
          </p>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
