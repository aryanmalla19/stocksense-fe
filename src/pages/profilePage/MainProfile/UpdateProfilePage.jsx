import React, { useState, useEffect } from "react";
import Input from "../../../components/common/Input";
import { FaCloudUploadAlt } from "react-icons/fa";
import useUpdateProfile from "../../../hooks/userhooks/useUpdateProfile";
import useUserDetails from "../../../hooks/authhooks/useUserDetails";

// Reusable Input Section Component
const InputSection = ({
  label,
  placeholder,
  value,
  onChange,
  name,
  disabled = false,
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
      className="w-full sm:w-[550px] text-black p-2 rounded-md focus:outline-none"
    />
  </div>
);

const UpdateProfilePage = ({ theme }) => {
  const { userDetails } = useUserDetails();
  const userProfile = userDetails?.data;
  const isActive = userProfile?.is_active;

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    number: "",
    bio: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const { updateProfile } = useUpdateProfile();

  useEffect(() => {
    if (userProfile) {
      setProfile({
        name: userProfile.name || "",
        email: userProfile.email || "",
        number: userProfile.phone_number || "",
        bio: userProfile.bio || "",
      });
    }
  }, [userProfile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedImageFile(file);
      setSelectedImage(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", profile.name);
    formData.append("email", profile.email);
    formData.append("phone_number", profile.number);
    formData.append("bio", profile.bio);

    if (selectedImageFile) {
      formData.append("profile_image", selectedImageFile);
      console.log("Uploading image:", selectedImageFile);
    }

    updateProfile(formData);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 p-4 w-full max-w-full mx-auto"
      >
        {/* Photo Upload Section */}
        <div className="relative">
          <img
            src={selectedImage || userProfile?.profile_image}
            alt="Profile Preview"
            className="rounded-full w-32 h-32 object-cover  bg-white text-black text-center font-extrabold"
          />
          <input
            type="file"
            id="photo-upload"
            accept="image/*"
            className="hidden"
            onChange={handleImageUpload}
          />
          <label
            htmlFor="photo-upload"
            className="absolute bottom-0 left-1/12 bg-gray-400 rounded-full p-2 cursor-pointer shadow-md"
            title="Upload new photo"
          >
            <FaCloudUploadAlt className="text-2xl text-teal-700" />
          </label>
        </div>

        <div className="flex justify-between max-w-2xl  ">
          <div>
            <p className="p-2 rounded-md text-3xl font-bold flex items-center">
              {userProfile?.name}
              {isActive && (
                <span className="w-3 h-3 mt-6 bg-green-500 rounded-full"></span>
              )}
            </p>
            <p className="text-sm ">{userProfile?.email} </p>
          </div>
        </div>
        <hr className={`border-gray-400`}></hr>
        <div>
          <h2 className="text-center text-2xl font-semibold">Edit Profile</h2>
          {/* Input Fields */}
          <div className="my-4 flex flex-col gap-4 w-full">
            <div className="flex gap-4">
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
                disabled={true}
              />
            </div>
            <div className="flex gap-4">
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
            </div>
          </div>

          <button
            type="submit"
            className="p-2 rounded-md  text-white bg-gradient-button w-full"
          >
            Change
          </button>
        </div>
      </form>
    </>
  );
};

export default UpdateProfilePage;
