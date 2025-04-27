import React from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import { MdOutlineMailLock, MdOutlineLocalPhone } from "react-icons/md";

const UserDetailsProfile = ({
  userProfile,
  setIsModalOpen,
  selectedImage,
  handleImageUpload,
}) => {
  return (
    <div className="flex flex-col gap-4 p-4 w-full max-w-full mx-auto">
      <div className="relative">
        <img
          src={selectedImage || userProfile?.profile_image}
          alt="Profile Preview"
          className="rounded-full w-32 h-32 object-cover bg-white text-black text-center font-extrabold"
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

      <div className="flex justify-between max-w-2xl">
        <div>
          <p className="py-2 rounded-md text-3xl font-bold flex items-center">
            {userProfile?.name}
            {userProfile?.is_active && (
              <span className="w-3 h-3 mt-6 bg-green-500 rounded-full"></span>
            )}
          </p>
          <div className="text-xl flex gap-12">
            <p className="flex gap-2 justify-center items-center">
              <MdOutlineMailLock /> {userProfile?.email}
            </p>
            <p className="flex gap-2 justify-center items-center">
              <MdOutlineLocalPhone /> {userProfile?.phone_number}
            </p>
            {/* Edit Profile Button */}
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-purple-button text-white rounded-md p-2 cursor-pointer"
            >
              Edit Profile
            </button>
          </div>
          <p>{userProfile?.bio}</p>
          <p>{userProfile?.created_at}</p>
        </div>
      </div>
      <hr className="border-gray-400" />
    </div>
  );
};

export default UserDetailsProfile;
