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
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] text-center px-4">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/forgot-password-illustration-download-in-svg-png-gif-file-formats--lock-pin-security-crime-illustrations-2368063.png"
        alt="Forgot Password"
        className="w-120 h-120"
      />
      <div className="flex flex-col gap-3 mb-3">
        <h2 className="font-bold text-3xl text-gray-500">Forgot password?</h2>
        <p className="font-semibold text-2xl text-gray-500">
          No worries, we’ll send you reset instructions to your email.
        </p>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none"
        />

        <button
          type="submit"
          className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-600 my-5"
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
