import React from "react";

const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center mb-4">
        <hr className="flex-grow border-gray-400" />
        <p className="font-semibold text-gray-600 text-center mx-4">OR</p>
        <hr className="flex-grow border-gray-400" />
      </div>

      {/* Social login options */}

      <div className="flex flex-col space-y-4 mt-4">
        <button className="flex items-center justify-center border border-gray-300 p-2 rounded-md hover:bg-gray-100">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
            className="w-4 h-4 mr-2"
          />
          Login with Google
        </button>

        <button className="flex items-center justify-center border border-gray-300 p-2 rounded-md hover:bg-gray-100">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook Logo"
            className="w-4 h-4 mr-2"
          />
          Login with Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
