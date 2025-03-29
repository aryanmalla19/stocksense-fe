import React from "react";
import logo from "../assets/logo.png";

const RegisterHeader = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-5">
        <img src={logo} className="w-30 h-20 " />
        <h2 className="auth-h2">Registration</h2>
        <p className="auth-p">Signup to create new account</p>
      </div>
    </div>
  );
};

export default RegisterHeader;
