import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../authcomponent/SocialLogin";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import RegisterHeader from "../../authcomponent/RegisterHeader";
import useRegister from "../../hooks/useRegister";
import Input from "../../components/stocks/Input";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const RegisterPages = () => {
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
        <form className="space-y-5 mx-10" onSubmit={handleSubmit}>
          {/* Username input field */}
          <Input
            name="username"
            type="text"
            value={input.username}
            onChange={handleInputChange}
            placeholder="Username"
            error={error.username}
            icon={FaUser}
          />

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
            {loading ? <LoadingSpinner /> : "Signup"}
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

export default RegisterPages;
