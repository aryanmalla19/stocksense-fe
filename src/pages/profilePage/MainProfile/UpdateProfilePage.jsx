import React, { useState } from "react";
import Input from "../../../components/common/Input";

// Reusable Input Section
const InputSection = ({ label, placeholder, value, onChange }) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold text-gray-400">{label}</label>
    <Input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full sm:w-[500px] bg-gray-300 text-black p-2 rounded-md focus:outline-none"
    />
  </div>
);

const UpdateProfilePage = () => {
  // State for profile fields
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    number: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form className="flex flex-col justify-center items-center gap-4 mt-4 border border-gray-400 rounded-md p-4 max-w-xl ">
        <InputSection
          label="Name"
          placeholder="Enter Your Name"
          value={profile.name}
          onChange={handleChange}
        />
        <InputSection
          label="Email"
          placeholder="user@example.com"
          value={profile.email}
          onChange={handleChange}
        />
        <InputSection
          label="Phone Number"
          placeholder="Enter Your Number"
          value={profile.number}
          onChange={handleChange}
        />

        {/* Submit button */}
        <button className="p-2 rounded-md bg-teal-700 text-white hover:bg-teal-600 w-20 ">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UpdateProfilePage;
