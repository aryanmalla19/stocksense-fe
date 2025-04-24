import React from "react";

const Welcome = ({ isLogin, toggleAuthMode }) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-bold text-4xl text-center mb-6">
        {isLogin ? "Hello, Welcome!" : "Welcome Back!"}
      </h1>
      <p className="font-semibold text-xl mb-6">
        {isLogin ? "Don't have an account?" : "Already have an account?"}
      </p>
      <button
        onClick={toggleAuthMode}
        className="p-2 border-2 border-white w-30 rounded-[10px] hover:text-primary transition-all cursor-pointer font-semibold"
      >
        {isLogin ? "Register" : "Login"}
      </button>
    </div>
  );
};

export default Welcome;
