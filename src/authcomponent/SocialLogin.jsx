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

      <div className="flex justify-evenly">
        <button className="auth-social w-5/12">
          <img
            src="https://img.icons8.com/color/48/000000/google-logo.png"
            alt="Google Logo"
            className="w-4 h-4 mr-2"
          />
          Google
        </button>

        <button className="auth-social w-5/12">
          <img
            src="https://img.icons8.com/color/48/000000/facebook-new.png"
            alt="Facebook Logo"
            className="w-4 h-4 mr-2"
          />
          Facebook
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
