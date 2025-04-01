import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../authcomponent/SocialLogin";
import Rememberme from "../../authcomponent/Rememberme";
import LoginHeader from "../../authcomponent/LoginHeader";
import useRegister from "../../hooks/useRegister";
import Input from "../../components/stocks/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoadingSpinner from "../../components/common/LoadingSpinner";
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
    <div className="flex min-h-full">
      <div className="auth-bg w-1/2 pt-5">
        <div className="auth-container">
          <LoginHeader />
          {/* Login form */}
          <form className="space-y-4 mx-40 my-4" onSubmit={handleSubmit}>
            {/* Email input field */}
            <label className="font-medium ml-2 text-lg" htmlFor="email">
              Email
            </label>
            <Input
              name="email"
              type="email"
              value={input.email}
              onChange={handleInputChange}
              placeholder="Enter your email"
              error={error.email}
              icon={FaEnvelope}
            />
            <label className="font-medium ml-2 text-lg" htmlFor="password">
              Password
            </label>
            {/* Password input field */}
            <Input
              name="password"
              type="password"
              value={input.password}
              onChange={handleInputChange}
              placeholder="Enter your password"
              error={error.password}
              icon={FaLock}
            />

            {/* Remember Me and Forgot Password */}
            <Rememberme />

            {/* Submit button */}
            <button
              type="submit"
              className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
              disabled={loading || error.email || error.password}
            >
              {loading ? <LoadingSpinner /> : "Login"}
            </button>

            <SocialLogin />
            {/* Signup link */}
            <div className="text-center">
              <p>
                Don't have an account?
                <Link
                  to="/register"
                  className="text-teal-500 ml-1 font-semibold hover:underline"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      <div className="w-1/2 bg-teal-800 min-h-[]"></div>
    </div>
  );
};

export default LoginPages;
