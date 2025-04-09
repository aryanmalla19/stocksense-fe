import React from "react";
import confirmation from "../../assets/confirmation.png";
import useVerifyEmail from "../../hooks/authhooks/useVerifyEmail";

const ConfirmationPage = () => {
  const { resentLink, isLoading } = useVerifyEmail();

  const handleClick = () => {
    const email = localStorage.getItem("userEmail");
    console.log("Resending email for:", email);
    resentLink.mutate({ email });
  };

  return (
    <div className="flex flex-col h-screen justify-around items-center ">
      <div className="flex flex-col justify-center items-center gap-5">
        <div className="w-110 h-80">
          <img src={confirmation} className="w-full h-full" />
        </div>
        <h1 className="text-3xl font-bold text-[#4D4D4d]">
          Check Your Mail For Verification
        </h1>
        We have sent an email to your mailbox to confirm your email address.
      </div>
      <div>
        If you didn't get any mail
        <div onClick={handleClick}>
          <span className="font-semibold text-teal-700 cursor-pointer pl-2 hover:text-red-400">
            {isLoading ? "Resending..." : "Resend Confirmation mail"}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationPage;
