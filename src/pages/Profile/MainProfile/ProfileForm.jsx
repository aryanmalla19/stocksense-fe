import React, { useState } from "react";
import Input from "../../../components/Common/Input";

// Reusable Input Section
const InputSection = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  disabled = false,
  theme,
  errorMessage,
}) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold">{label}</label>
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      disabled={disabled}
      className={`w-full sm:w-[400px] text-black p-2 rounded-md focus:outline-none ${
        theme === "dark" ? "bg-gray-300" : "bg-gray-200"
      }`}
    />
    {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
  </div>
);

const ProfileForm = ({ profile, onSubmit, onChange, onCancel, theme }) => {
  const [error, setError] = useState("");

  const handlePhoneNumberChange = (e) => {
    const value = e.target.value;
    if (value.length > 10) {
      return;
    }
    onChange(e);
    if (value.length < 10 && value.length > 0) {
      setError("Number should be 10 digits");
    } else {
      setError("");
    }
  };

  return (
    <div
      className={`fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md p-6 rounded-lg shadow-lg ${
        theme === "dark" ? "bg-dark-bg text-dark-text" : "bg-white"
      }`}
    >
      <div className="justify-between items-center mb-4">
        <h2 className="text-center text-2xl font-semibold">Edit Profile</h2>

        {/* Input Fields */}
        <div className="my-4 flex flex-col gap-4 w-full">
          <InputSection
            name="name"
            label="Name"
            placeholder="Enter Your Name"
            value={profile.name}
            onChange={onChange}
            theme={theme}
          />
          <InputSection
            name="email"
            label="Email"
            placeholder="user@example.com"
            value={profile.email}
            onChange={onChange}
            disabled={true}
            theme={theme}
          />
          <InputSection
            name="number"
            label="Phone Number"
            placeholder="+9771245785"
            value={profile.number}
            max="10"
            onChange={handlePhoneNumberChange}
            theme={theme}
            errorMessage={error}
          />
          <InputSection
            name="bio"
            label="Bio"
            placeholder="Description"
            value={profile.bio}
            onChange={onChange}
            theme={theme}
          />
        </div>

        <div className="flex justify-between gap-4 mt-6">
          <button
            type="button"
            onClick={onSubmit}
            className="flex-1 p-2 rounded-md text-white bg-gradient-button cursor-pointer"
            disabled={error !== ""}
          >
            Change
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="flex-1 p-2 rounded-md bg-gray-400 text-white hover:bg-gray-500 cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileForm;
