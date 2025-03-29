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
    <div className="auth-bg">
      <div className="auth-container">
        <LoginHeader />
        {/* Login form */}
        <form className="space-y-6 mx-10 my-4" onSubmit={handleSubmit}>
          {/* Email input field */}
          <Input
            name="email"
            type="email"
            value={input.email}
            onChange={handleInputChange}
            placeholder="Email"
            error={error.email}
            icon={FaEnvelope}
          />

          {/* Password input field */}
          <Input
            name="password"
            type="password"
            value={input.password}
            onChange={handleInputChange}
            placeholder="Password"
            error={error.password}
            icon={FaLock}
          />

          {/* Remember Me and Forgot Password */}
          <Rememberme />

          {/* Submit button */}
          <button
            type="submit"
            className="auth-button bg-gradient-to-l from-blue-500 to-blue-800 hover:from-blue-600 hover:to-blue-700 transition duration-200 w-full"
            disabled={loading || error.email || error.password}
          >
            {loading ? <LoadingSpinner /> : "Login"}
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
