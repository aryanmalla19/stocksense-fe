import React from "react";
import logo from "../assets/logo.png";

const LoginHeader = () => {
  return (
    <div>
      <img src={logo} className="w-20 h-15 mx-5" />
      <div className="flex flex-col items-center">
        <h2 className="text-2xl font-semibold">Welcome Back!</h2>
        <p className="auth-p">Please enter login details below</p>
      </div>
    </div>
  );
};

export default LoginHeader;
