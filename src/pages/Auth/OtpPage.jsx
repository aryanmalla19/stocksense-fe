import React, { useState } from "react";
import Cookies from "js-cookie";
import otpImage from "../../assets/otp.png";
import useVerifyOtp from "../../hooks/authhooks/useVerifyOtp";

const OtpPage = () => {
  const [OTP, setOTP] = useState(["", "", "", "", "", ""]);
  const private_token = Cookies.get("private_token");
  const email = Cookies.get("email");
  const { otpVerifymutation, isLoading } = useVerifyOtp();

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[a-zA-Z0-9]?$/.test(value)) {
      const newOtp = [...OTP];
      newOtp[index] = value;
      setOTP(newOtp);

      if (index < OTP.length - 1 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !OTP[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const verifyOTP = (e) => {
    e.preventDefault();
    otpVerifymutation.mutate({
      otp: OTP.join(""),
      private_token,
      email,
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-[#e2e2e2] to-[#c9d6ff] text-center px-4">
      <img src={otpImage} alt="otp" className="w-100 h-100" />
      <div className="flex flex-col gap-3">
        <h2 className="font-bold text-3xl text-gray-500">OTP Verification</h2>
        <p className="font-semibold text-2xl text-gray-500">
          We have sent an OTP to the given email
        </p>
        <p className="text-green-600 font-bold mb-10">Enter OTP</p>
      </div>
      <div className="flex space-x-4">
        {OTP.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            maxLength={1}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className="w-12 h-12 text-center border border-gray-900 rounded-md text-xl focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
        ))}
      </div>
      <button
        onClick={verifyOTP}
        className="px-4 py-2 text-white bg-teal-700 rounded hover:bg-teal-600 my-5"
        disabled={isLoading}
      >
        {isLoading ? "Verifying..." : "Submit"}
      </button>
    </div>
  );
};

export default OtpPage;
