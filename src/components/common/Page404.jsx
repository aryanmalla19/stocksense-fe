import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/404.png";

const Page404 = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] text-center px-4">
      <img src={logo} alt="404" className="w-100 h-100" />
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Oops! Page not found
      </h1>
      <p className="text-gray-600 mb-6 text-lg">
        The page you're looking for doesn’t exist or has been moved.
      </p>
      <Link
        to="/"
        className="px-6 py-3 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-600 transition duration-300"
      >
        Go to Homepage
      </Link>
    </div>
  );
};

export default Page404;
