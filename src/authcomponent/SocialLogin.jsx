import React from "react";
import useOAuth from "../hooks/authhooks/useOAuth";

const SocialButton = ({ logoSrc, altText, text, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center justify-center gap-4 border-gray-400 p-2 bg-gray-100 hover:bg-gray-200 cursor-pointer"
  >
    <img src={logoSrc} alt={altText} className="w-6 h-6 mr-2" />
    <p className="text-sm font-medium">{text}</p>
  </div>
);

const SocialLogin = () => {
  const { mutate, data } = useOAuth();

  const handleClick = () => {
    mutate();
  };
  console.log(data);
  return (
    <div>
      <div className="flex items-center my-4">
        <hr className="flex-grow border-gray-500" />
        <p className="font-semibold text-gray-500 text-center mx-4">OR</p>
        <hr className="flex-grow border-gray-500" />
      </div>
      <div className="flex flex-col justify-center gap-2">
        <SocialButton
          onClick={handleClick}
          logoSrc="https://img.icons8.com/color/48/000000/google-logo.png"
          altText="Google Logo"
          text="Continue with Google"
        />
      </div>
    </div>
  );
};

export default SocialLogin;
