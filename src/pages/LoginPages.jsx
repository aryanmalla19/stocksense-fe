import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../auth/SocialLogin";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Rememberme from "../auth/Rememberme";
import LoginHeader from "../auth/LoginHeader";
import useRegister from "../hooks/useRegister";

const LoginPages = () => {
  const { input, setInput, error, loading, handleSubmit } = useRegister();

  // General onChange handler for all input fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInput((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  };

  return (
    <div className="auth-bg">
      <div className="auth-container">
        <LoginHeader />
        {/* Login form */}
        <form className="space-y-6 mx-10 my-4" onSubmit={handleSubmit}>
          {/* Email input field */}
          <div className="relative">
            <FaEnvelope className="auth-icon" />
            <input
              type="email"
              name="email"
              value={input.email}
              onChange={handleInputChange}
              placeholder="Email"
              className="auth-input"
              required
            />
            {/* Error message for email */}
            {error.email && (
              <p className="text-red-500 text-xs">{error.email}</p>
            )}
          </div>

          {/* Password input field */}
          <div className="relative">
            <FaLock className="auth-icon" />
            <input
              type="password"
              name="password"
              value={input.password}
              onChange={handleInputChange}
              placeholder="Password"
              className="auth-input"
              required
            />
            {/* Error message for password */}
            {error.password && (
              <p className="text-red-500 text-xs">{error.password}</p>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <Rememberme />

          {/* Submit button */}
          <button
            type="submit"
            className="auth-button bg-gradient-to-l from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-700 transition duration-200 w-full"
            disabled={loading || error.email || error.password}
          >
            {loading ? "Loading..." : "Login"}
          </button>

          {/* Signup link */}
          <div className="text-center">
            <p>
              Don't have an account?
              <Link to="/register" className="text-blue-500 hover:underline">
                Signup
              </Link>
            </p>
          </div>

          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default LoginPages;
