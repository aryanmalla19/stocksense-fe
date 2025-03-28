import React from "react";

const Rememberme = () => {
  return (
    <div>
      {/* Remember Me and Forgot Password */}
      <div className="flex justify-between items-center">
        <label className="flex items-center">
          <input type="checkbox" className="mr-2" />
          Remember Me
        </label>
        <a href="#" className="text-red-500 hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Rememberme;
