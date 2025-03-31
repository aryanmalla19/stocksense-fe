import React from "react";

const Rememberme = () => {
  return (
    <div>
      {/* Remember Me and Forgot Password */}
      <div className="flex my-3 justify-between items-center">
        <label className="flex cursor-pointer items-center">
          <input type="checkbox" className="mr-2 accent-teal-800" />
          Remember Me
        </label>
        <a href="#" className="text-teal-800 hover:underline">
          Forgot Password?
        </a>
      </div>
    </div>
  );
};

export default Rememberme;
