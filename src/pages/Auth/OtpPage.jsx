import React, { useState } from "react";
import Cookies from "js-cookie";
import useVerifyOtp from "../../hooks/authhooks/useVerifyOtp";

export const OtpPage = () => {
  var [otp, setOtp] = useState(["", "", "", "", "", ""]);

  const private_token = Cookies.get('private_token');
  const email = Cookies.get("email");
  const { otpVerifymutation, isLoading } = useVerifyOtp();


  const handleChange = (e, index) => {
    const value = e.target.value;

    if (/^[a-zA-Z0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
  };

  const verifyOTP = (e)=>{

    e.preventDefault();
    otp = otp.join('');
     otpVerifymutation.mutate({
       otp,private_token, email
     });

  }

    // if (token) {
    //   return <Navigate to="/" replace />;
    // }

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mb-4">Enter OTP</h2>
      <div className="flex space-x-2 mb-4">
        {otp.map((digit, index) => (
          <input
            key={index}
            id={`otp-input-${index}`}
            type="text"
            value={digit}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
            className="w-12 h-12 text-2xl text-center border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        ))}
      </div>
      <button
        onClick={verifyOTP}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Submit
      </button>
    </div>
  );
};
