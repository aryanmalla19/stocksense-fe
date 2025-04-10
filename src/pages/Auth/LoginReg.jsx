import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import LoginPages from "./LoginPages";
import RegisterPages from "./RegisterPages";
import Welcome from "./Welcome";
import { toast } from "react-hot-toast";

const LoginReg = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const location = useLocation();

  const toggleAuthMode = () => setIsLoggedIn(!isLoggedIn);

  // Handle verification redirect
  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const message = searchParams.get("message");
    const error = searchParams.get("error");

    if (message === "email_verified") {
      toast.success("Email verified successfully", {
        duration: 5000,
        position: "top-right",
      });
      window.history.replaceState({}, document.title, "/loginReg");
      setIsLoggedIn(true); // Switch to login mode after verification
    } else if (message === "already_verified") {
      toast("Email was already verified", {
        duration: 5000,
        position: "top-right",
        style: {
          background: "#e8f0fe",
          color: "#333",
        },
      });
      window.history.replaceState({}, document.title, "/loginReg");
      setIsLoggedIn(true);
    } else if (error === "invalid_signature") {
      toast.error("Invalid or expired verification link", {
        duration: 5000,
        position: "top-right",
      });
    } else if (error === "invalid_link") {
      toast.error("Invalid verification link", {
        duration: 5000,
        position: "top-right",
      });
    }
  }, [location]);

  return (
    <div>
      <div className="relative flex justify-center items-center min-h-screen bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff]">
        <div className="relative w-full max-w-[1100px] md:h-[1000px] xl:h-[610px] bg-white rounded-xl shadow-xl flex flex-col md:flex-row overflow-x-hidden">
          <div
            className={`bg-teal-800 text-white p-10 w-full flex flex-col justify-center items-center rounded-b-[100px] transition-all duration-500 ${
              isLoggedIn
                ? "md:w-2/3 md:rounded-r-[150px] md:rounded-l-none"
                : "md:w-1/2 md:rounded-l-[150px] md:rounded-r-none"
            } ${isLoggedIn ? "" : "translate-x-full"}`}
          >
            <Welcome isLoggedIn={isLoggedIn} toggleAuthMode={toggleAuthMode} />
          </div>

          <div
            className={`w-full md:w-1/2 flex flex-col justify-center items-center p-8 bg-white transition-all duration-500 ${
              isLoggedIn ? "" : "-translate-x-full"
            }`}
          >
            <h2 className="text-4xl font-bold mb-6 text-gray-700">
              {isLoggedIn ? "Login" : "Register"}
            </h2>
            {isLoggedIn ? (
              <LoginPages isLoggedIn={isLoggedIn} />
            ) : (
              <RegisterPages isLoggedIn={isLoggedIn} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginReg;