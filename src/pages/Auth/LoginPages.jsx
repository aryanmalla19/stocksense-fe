import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../authcomponent/SocialLogin";
import Rememberme from "../../authcomponent/Rememberme";
import LoginHeader from "../../authcomponent/LoginHeader";
import Input from "../../components/stocks/Input";
import { FaEnvelope, FaLock } from "react-icons/fa";
import LoadingSpinner from "../../components/common/LoadingSpinner";
import useLogin from "../../hooks/useLogin";

const LoginPages = () => {
  const { input, handleChange, error, loading, mutate } = useLogin();
  console.log("Login Loading State in Component:", loading);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", input);
    mutate(input);
  };

  return (
    <div className="flex min-h-full">
      <div className="auth-bg w-1/2 pt-5">
        <div className="auth-container">
          <LoginHeader />
          <form className="space-y-4 mx-40 my-4" onSubmit={handleSubmit}>
            <label className="font-medium ml-2 text-lg" htmlFor="email">
              Email
            </label>
            <Input
              name="email"
              type="email"
              value={input.email}
              onChange={handleChange}
              placeholder="Enter your email"
              error={error?.email}
              icon={FaEnvelope}
            />

            <label className="font-medium ml-2 text-lg" htmlFor="password">
              Password
            </label>
            <Input
              name="password"
              type="password"
              value={input.password}
              onChange={handleChange}
              placeholder="Enter your password"
              error={error?.password}
              icon={FaLock}
            />

            <Rememberme />

            <button
              type="submit"
              className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
              disabled={loading || (error && (error.email || error.password))}
            >
              {loading ? <LoadingSpinner /> : "Login"}
            </button>

            <SocialLogin />
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
      <div className="w-1/2 bg-teal-800 min-h-screen"></div>{" "}
    </div>
  );
};

export default LoginPages;
