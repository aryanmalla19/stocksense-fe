import React, { useState } from "react";
import Input from "../../../components/common/Input";
import { FaCloudUploadAlt } from "react-icons/fa";
import useUpdateProfile from "../../../hooks/userhooks/useUpdateProfile";

// Reusable Input Section Component
const InputSection = ({ label, placeholder, value, onChange, name }) => (
  <div className="flex flex-col gap-2">
    <label className="font-semibold">{label}</label>
    <Input
      type="text"
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full sm:w-[500px] text-black p-2 rounded-md focus:outline-none"
    />
  </div>
);

const UpdateProfilePage = ({ theme }) => {
  const [profile, setProfile] = useState({
    name: "",
    email: "",
    number: "",
    bio: "",
  });

  const { updateProfile } = useUpdateProfile();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: profile.name,
      email: profile.email,
      phone_number: profile.number,
      bio: profile.bio,
    };

    updateProfile(data);
  };

  return (
    <>
      <p className="text-lg font-semibold text-center my-4">
        Manage your personal information
      </p>
      <form
        onSubmit={handleSubmit}
        className={`flex flex-col justify-center items-center gap-4 mt-2 border rounded-md p-4 max-w-xl ${
          theme === "dark" ? "border-gray-600" : "border-gray-200"
        }`}
      >
        {/* Photo Upload Section */}
        <div className="relative">
          <img
            src="https://www.shutterstock.com/image-vector/upload-document-data-file-cloud-600nw-2297720825.jpg"
            alt="Profile Preview"
            className="rounded-full w-32 h-32 object-cover"
          />
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
          />
          <label
            htmlFor="photo-upload"
            className="absolute bottom-0 right-0 bg-white rounded-full p-2 cursor-pointer shadow-md"
            title="Upload new photo"
          >
            <FaCloudUploadAlt className="text-2xl text-teal-700" />
          </label>
        </div>

        {/* Input Fields */}
        <InputSection
          name="name"
          label="Name"
          placeholder="Enter Your Name"
          value={profile.name}
          onChange={handleChange}
        />
        <InputSection
          name="email"
          label="Email"
          placeholder="user@example.com"
          value={profile.email}
          onChange={handleChange}
        />
        <InputSection
          name="number"
          label="Phone Number"
          placeholder="+985214578451"
          value={profile.number}
          onChange={handleChange}
        />
        <InputSection
          name="bio"
          label="Bio"
          placeholder="Description"
          value={profile.bio}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="p-2 rounded-md bg-teal-700 text-white hover:bg-teal-600 w-24"
        >
          Change
        </button>
      </form>
    </>
  );
};

export default UpdateProfilePage;
