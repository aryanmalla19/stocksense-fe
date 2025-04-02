import React from "react";
import { Link } from "react-router-dom";
import SocialLogin from "../../authcomponent/SocialLogin";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";
import RegisterHeader from "../../authcomponent/RegisterHeader";
import useRegister from "../../hooks/useRegister";
import Input from "../../components/stocks/Input";
import LoadingSpinner from "../../components/common/LoadingSpinner";

const RegisterPages = () => {
  const { input, handleChange, error, loading, mutate } = useRegister();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitting:", input);
    mutate(input);
  };

  return (
    <div className="flex">
      <div className="w-1/2 bg-teal-800 pt-5"></div>
      <div className="auth-bg w-1/2 flex items-center justify-center">
        <div className="auth-container">
          <RegisterHeader />
          <form className="space-y-4 mx-30 my-4" onSubmit={handleSubmit}>
            <label className="font-medium ml-2 text-lg" htmlFor="name">
              Name
            </label>
            <Input
              name="name"
              type="text"
              value={input?.name}
              onChange={handleChange}
              placeholder="Name"
              error={error?.name}
              icon={FaUser}
            />

            <label className="font-medium ml-2 text-lg" htmlFor="email">
              Email
            </label>
            <Input
              name="email"
              type="email"
              value={input?.email}
              onChange={handleChange}
              placeholder="Email"
              error={error?.email}
              icon={FaEnvelope}
            />

            <label className="font-medium ml-2 text-lg" htmlFor="password">
              Password
            </label>
            <Input
              name="password"
              type="password"
              value={input?.password}
              onChange={handleChange}
              placeholder="Password"
              error={error?.password}
              icon={FaLock}
            />

            <label className="font-medium ml-2 text-lg" htmlFor="password_confirmation">
              Confirm Password
            </label>
            <Input
              name="password_confirmation"
              type="password"
              value={input?.password_confirmation}
              onChange={handleChange}
              placeholder="Confirm Password"
              error={error?.password_confirmation}
              icon={FaLock}
            />

            {error && <div className="text-red-500 text-center">{error}</div>}

            <button
              type="submit"
              className="auth-button cursor-pointer bg-gradient-to-l from-teal-500 to-teal-800 hover:from-teal-600 hover:to-teal-700 transition duration-200 w-full"
              disabled={loading}
            >
              {loading ? <LoadingSpinner /> : "Signup"}
            </button>

            <SocialLogin />

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