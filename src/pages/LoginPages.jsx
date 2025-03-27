import React from "react";
import SocialLogin from "../auth/SocialLogin";
import { FaEnvelope, FaLock } from "react-icons/fa";
import Rememberme from "../auth/Rememberme";

const LoginPages = () => {
  return (
    <div className="auth-bg">
      <div className="auth-container">
        <div>
          <h2 className="auth-h2">Welcome Back!!</h2>
          <p className="auth-p">Login to your account</p>
        </div>

        {/* Login form */}
        <form className="space-y-6 mx-10 my-4">
          {/* Email input field */}
          <div className="relative">
            <FaEnvelope className="auth-icon" />
            <input type="text" placeholder="Email" className="auth-input" />
          </div>

          {/* Password input field */}
          <div className="relative">
            <FaLock className="auth-icon" />
            <input type="text" placeholder="Password" className="auth-input" />
          </div>

          {/* Remember Me and Forgot Password */}
          <Rememberme />

          {/* Submit button */}
          <button
            type="submit"
            className="auth-button bg-gradient-to-l from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-700 transition duration-200 w-full"
          >
            Login
          </button>

          {/* Signup link */}
          <div className="text-center">
            <p>
              Don't have an account?{" "}
              <a href="#" className="text-blue-500 hover:underline">
                Signup
              </a>
            </p>
          </div>

          <SocialLogin />
        </form>
      </div>
    </div>
  );
};

export default LoginPages;
