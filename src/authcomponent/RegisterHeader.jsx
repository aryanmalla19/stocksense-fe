import React from "react";
import logo from "../assets/logo.png";

const RegisterHeader = () => {
  return (
    <div className="mt-5">
        <img src={logo} className="w-20 h-15 mx-5" />
      <div className="flex mt-[-30px] flex-col items-center">
        <h2 className="text-2xl font-semibold">Registration</h2>
        <p className="auth-p">Signup to create new account</p>
      </div>
    </div>
  );
};

export default RegisterHeader;
