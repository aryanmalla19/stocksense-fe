import React, { useState, useEffect } from "react";
import useUpdateProfile from "../../../hooks/user/useUpdateProfile";
import useUserDetails from "../../../hooks/auth/useUserDetails";
import ProfileForm from "./ProfileForm";
import UserDetailsProfile from "./UserDetailsProfile";

const UpdateProfilePage = ({ theme }) => {
  const { userDetails } = useUserDetails();
  const userProfile = userDetails?.data;

  const [profile, setProfile] = useState({
    name: "",
    email: "",
    number: "",
    bio: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {/* User Profile Section */}
      <div>
        <UserDetailsProfile
          userProfile={userProfile}
          setIsModalOpen={setIsModalOpen}
          selectedImage={selectedImage}
          handleImageUpload={handleImageUpload}
        />
      </div>

      {/* Modal Section */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-30">
          <ProfileForm
            profile={profile}
            onSubmit={handleSubmit}
            onChange={handleChange}
            onCancel={handleCancel}
            theme={theme}
          />
        </div>
      )}
    </>
  );
};

export default UpdateProfilePage;
