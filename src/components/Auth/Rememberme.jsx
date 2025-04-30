import React from "react";
import { Link } from "react-router-dom";
const Rememberme = () => {
  return (
    <div>
      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between mb-4 text-base text-gray-800">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember me
        </label>
        <Link to="/forgot-password" className="text-red-500 hover:text-red-600">
          Forgot Password?
        </Link>
      </div>
    </div>
  );
};

export default Rememberme;
