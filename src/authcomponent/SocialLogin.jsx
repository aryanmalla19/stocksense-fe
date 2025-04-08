import React from "react";

// Reusable Social Button Component
const SocialButton = ({ logoSrc, altText, text }) => (
  <div className="flex items-center justify-center gap-4 border-gray-400 p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer">
    <img src={logoSrc} alt={altText} className="w-6 h-6 mr-2" />
    <p className="text-sm font-medium">{text}</p>
  </div>
);

const SocialLogin = () => {
  return (
    <div>
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-500" />
        <p className="font-semibold text-gray-500 text-center mx-4">OR</p>
        <hr className="flex-grow border-gray-500" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <SocialButton
          logoSrc="https://img.icons8.com/color/48/000000/google-logo.png"
          altText="Google Logo"
          provider="google"
          text="Continue with Google"
        />
        <SocialButton
          logoSrc="https://img.icons8.com/color/48/000000/facebook-new.png"
          altText="Facebook Logo"
          provider="facebook"
          text="Continue with Facebook"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
