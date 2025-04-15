import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import ChangePasswordForm from "./ChangePasswordForm";
import { enableTwoFactor } from "../../../api/stocksApiService";

const SecurityPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { theme } = useContext(ThemeContext);

  const twoFactorEnable = ()=>{
    enableTwoFactor();
  }

  return (
    <>
      {/* Dark Background Overlay When Modal is Open */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-50 bg-opacity-10 backdrop-blur-sm z-40"></div>
      )}

      {/* Modal Form */}
      {isModalOpen && (
        <ChangePasswordForm onClose={() => setIsModalOpen(false)} />
      )}

      <div className="flex gap-4 my-4">
        {/* Password Section */}
        <div
          className={`p-6 rounded-lg w-1/2 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200"
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

        {/* Two-Factor Authentication Section */}
        <div
          className={`p-6 rounded-lg w-1/2 ${
            theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200"
          }`}
        >
          <h3 className="text-lg font-semibold">Two-Factor Authentication</h3>
          <p className="text-sm text-gray-400">
            Protect your account with two-factor authentication
          </p>

          <button
            className="mt-2 px-4 py-2 bg-teal-700 text-white rounded-lg cursor-pointer"
            onClick={twoFactorEnable}
          >
            Enable
          </button>

        </div>
      </div>

      {/* Account Security Section */}
      <div
        className={`p-6 rounded-lg ${
          theme === "dark" ? "bg-gray-800 text-white" : "bg-gray-200"
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

        <button className="mt-4 w-full px-4 py-2 bg-red-600 text-white rounded-lg">
          Sign Out From All Devices
        </button>
      </div>
    </>
  );
};

export default SecurityPage;
