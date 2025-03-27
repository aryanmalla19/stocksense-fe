import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../auth/SocialLogin";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import RegisterHeader from "../auth/RegisterHeader";
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
        <RegisterHeader />
        {/* Registration form */}
        <form className="space-y-5 mx-10 my-4" onSubmit={handleSubmit}>
          {/* Username input field */}
          <div className="relative">
            <FaUser className="auth-icon" />
            <input
              type="text"
              name="username"
              placeholder="Username"
              className="auth-input"
              value={input.username}
              onChange={handleInputChange}
            />
          </div>

          {/* Email input field */}
          <div className="relative">
            <FaEnvelope className="auth-icon" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="auth-input"
              value={input.email}
              onChange={handleInputChange}
            />
          </div>

          {/* Password input field */}
          <div className="relative">
            <FaLock className="auth-icon" />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="auth-input"
              value={input.password}
              onChange={handleInputChange}
            />
          </div>

          {/* Error Message */}
          {error && (
            <div className="text-red-500 text-center">
              <p>{error}</p>
            </div>
          )}

          {/* Submit button */}
          <button
            type="submit"
            className="auth-button bg-gradient-to-l from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-700 transition duration-200 w-full"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Signup"}
          </button>

          {/* Login link */}
          <div className="text-center">
            <p>
              Already have an account?
              <Link to="/login" className="text-blue-500 hover:underline">
                Login
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
