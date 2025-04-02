import React from "react";
import confirmation from "../../assets/confirmation.png";

const ConfirmationPage = () => {
  return (
    <div className="flex flex-col h-screen justify-around items-center ">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-110 h-80">
          <img src={confirmation} className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-bold text-[#4D4D4d]">
          Check Your Mail For Verification
        </h1>
        We have send email to your Mail Box to confirm the validity of our email
        address.
      </div>
      <div className="">
        If you didn't get any mail{" "}
        <span className="font-semibold text-teal-700 cursor-pointer">
          Resend Confirmation mail
        </span>
      </div>
    </div>
  );
};

export default ConfirmationPage;
