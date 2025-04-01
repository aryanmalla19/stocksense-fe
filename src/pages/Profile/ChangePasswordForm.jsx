// components/ChangePasswordForm.js
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const ChangePasswordForm = ({ onClose }) => {
  const { theme } = useContext(ThemeContext);
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onClose();
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-lg shadow-lg ${
        theme === "dark" ? "bg-gray-800 text-white" : "bg-white"
      }`}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-semibold">Change Password</h3>
        <button
          onClick={onClose}
          className={`p-1 rounded-full ${
            theme === "dark" ? "hover:bg-gray-700" : "hover:bg-gray-200"
          }`}
        >
          ✕
        </button>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">
            Current Password
          </label>
          <input
            type="password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
            className={`w-full p-2 border rounded ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
            required
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className={`w-full p-2 border rounded ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
            required
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Confirm New Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className={`w-full p-2 border rounded ${
              theme === "dark"
                ? "bg-gray-700 border-gray-600"
                : "bg-white border-gray-300"
            }`}
            required
          />
        </div>

        <div className="flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className={`px-4 py-2 rounded-lg ${
              theme === "dark"
                ? "bg-gray-700 hover:bg-gray-600"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800"
          >
            Change Password
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChangePasswordForm;
