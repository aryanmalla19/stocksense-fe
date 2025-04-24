import React from "react";
import LoginPages from "./LoginPages";
import RegisterPages from "./RegisterPages";
import Welcome from "./Welcome";
import { useLocation, useNavigate } from "react-router-dom";

const LoginReg = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLogin = location.pathname === "/login";
  console.log(isLogin);
  const toggleAuthMode = () => {
    navigate(isLogin ? "/register" : "/login");
  };

  return (
    <div>
      <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
        <div className="relative w-full max-w-[1100px] md:h-[1000px] xl:h-[610px] bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-x-hidden">
          <div
            className={`bg-teal-800 text-white p-10 w-full flex flex-col justify-center items-center rounded-b-[100px] transition-all duration-500 ${
              isLogin
                ? "md:w-2/3 md:rounded-r-[150px] md:rounded-l-none"
                : "md:w-1/2 md:rounded-l-[150px] md:rounded-r-none"
            } ${isLogin ? "" : "translate-x-full"}`}
          >
            <Welcome isLogin={isLogin} toggleAuthMode={toggleAuthMode} />
          </div>

          <div
            className={`w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white transition-all duration-500 ${
              isLogin ? "" : "-translate-x-full"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-700">
              {isLogin ? "Login" : "Register"}
            </h2>
            {isLogin ? <LoginPages /> : <RegisterPages />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginReg;
