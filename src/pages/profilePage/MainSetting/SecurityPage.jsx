import React, { useState } from "react";
import ChangePasswordForm from "./ChangePasswordForm";

import ToggleButton from "../../../components/common/ToggleButton";
import { disableTwoFactor, enableTwoFactor } from "../../../api/userApi";

const SecurityPage = ({ theme }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);

  const handleToggle = () => {
    const newValue = !is2FAEnabled;
    setIs2FAEnabled(newValue);
    if (newValue) {
      enableTwoFactor();
    } else {
      disableTwoFactor();
    }
  };

  return (
    <>
      {isModalOpen && (
        <>
          <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-30"></div>
          <ChangePasswordForm
            onClose={() => setIsModalOpen(false)}
            theme={theme}
          />
        </>
      )}

      <div className="flex gap-4 my-4">
        {/* Password Section */}
        <div
          className={`p-6 rounded-lg w-1/2 ${
            theme === "dark"
              ? "bg-dark-bg text-dark-text"
              : "bg-light-bg text-light-text"
          }`}
        >
          <h3 className="text-lg font-semibold">Password</h3>
          <p>Change your password or enable two-factor authentication</p>
          <p className="text-sm text-gray-400 mt-4">
            Last changed 3 months ago
          </p>
          <button
            className="mt-2 px-4 py-2 bg-teal-700 text-white rounded-lg cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Change
          </button>
        </div>

        <div
          className={`p-6 rounded-lg w-1/2 ${
            theme === "dark"
              ? "bg-dark-bg text-dark-text"
              : "bg-light-bg text-light-text"
          }`}
        >
          <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-400">
            Protect your account with two-factor authentication
          </p>

          <div className="mt-5">
            <ToggleButton isToggled={is2FAEnabled} onToggle={handleToggle} />
          </div>
        </div>
      </div>

      <div
        className={`p-6 rounded-lg ${
          theme === "dark"
            ? "bg-dark-bg text-dark-text"
            : "bg-light-bg text-light-text"
        }`}
      >
        <h3 className="text-lg font-semibold">Account Security</h3>
        <p className="text-sm text-gray-400">
          Manage your account security settings
        </p>

        <div className="flex justify-between items-center mt-2">
          <span>Login Notifications</span>
        </div>

        <div className="flex justify-between items-center mt-2">
          <span>Suspicious Activity Alerts</span>
        </div>

        {/* <button className="mt-4 w-full px-4 py-2 bg-blue-400 text-white rounded-lg">
          Sign Out From All Devices
        </button> */}
      </div>
    </>
  );
};

export default SecurityPage;
