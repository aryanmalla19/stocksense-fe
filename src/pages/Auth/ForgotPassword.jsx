import React, { useState } from "react";
import { toast } from "react-hot-toast";
import useForgotPassword from "../../hooks/authhooks/useForgotPassword";
import forgot from "../../assets/forgot.png";
import { FiMail, FiArrowRight } from "react-icons/fi";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { forgotPasswordMutation } = useForgotPassword();

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
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="text-center py-5">
        <img
          src={forgot}
          alt="Forgot Password"
          className="w-55 h-55 mx-auto mb-6 animate-float"
        />
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Forgot your password?
        </h2>
        <p className="text-gray-600">
          No worries! Enter your email and we'll send you reset instructions.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiMail className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:none"
          />
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center px-6
          py-3 rounded-lg text-white bg-gradient-button cursor-pointer font-medium transition duration-200"
        >
          Send Reset Link
          <FiArrowRight className="ml-2" />
        </button>
      </form>

      <p className="text-center text-xl text-gray-500 mt-5 ">
        Remember your password?
        <a
          href="/login"
          className="text-green-600 hover:text-green-800  font-semibold"
        >
          Login
        </a>
      </p>
    </div>
  );
};

export default ForgotPassword;
