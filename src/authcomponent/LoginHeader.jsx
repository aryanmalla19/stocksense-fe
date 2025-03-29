import React from "react";
import logo from "../assets/logo.png";

const LoginHeader = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <img src={logo} className="w-30 h-20 " />
        <h2 className="auth-h2">Welcome Back!!</h2>
        <p className="auth-p">Login to your account</p>
      </div>
    </div>
  );
};

export default LoginHeader;
