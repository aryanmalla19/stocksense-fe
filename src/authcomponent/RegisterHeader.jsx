import React from "react";
import logo from "../assets/logo.png";

const RegisterHeader = () => {
  return (
    <div className="mt-[-60px]">
        <img src={logo} className="w-20 h-15 mx-5" />
      <div className="flex flex-col items-center mt-5">
        <h2 className="text-2xl font-semibold">Registration</h2>
        <p className="auth-p">Signup to create new account</p>
      </div>
    </div>
  );
};

export default RegisterHeader;
