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
    <div className="flex">
      <div className="w-1/2 bg-teal-800 pt-5">
      </div>
      <div className="auth-bg w-1/2 items-center">
        <div className="auth-container">
          <RegisterHeader />
          {/* Registration form */}
          <form className="space-y-4 mx-40 my-4" onSubmit={handleSubmit}>

            <label className="font-medium ml-2 text-lg" htmlFor="name">Name</label>
            {/* Username input field */}
            <Input
              name="name"
              type="text"
              value={input.name}
              onChange={handleInputChange}
              placeholder="Name"
              error={error.name}
              icon={FaUser}
            />

            <label className="font-medium ml-2 text-lg" htmlFor="email">Email</label>
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

            <label className="font-medium ml-2 text-lg" htmlFor="password">Password</label>
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

            <label className="font-medium ml-2 text-lg" htmlFor="password_confirmation">Confrim Password</label>
            {/* Password Confirmation input field */}
            <Input
              name="password_confirmation"
              type="password"
              value={input.password}
              onChange={handleInputChange}
              placeholder="Confirm Password"
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
              className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Signup"}
            </button>

            <SocialLogin />
            {/* Login link */}
            <div className="text-center">
              <p>
                Already have an account?
                <Link to="/login" className="text-teal-500 ml-1 hover:underline">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>

  );
};

export default RegisterPages;
