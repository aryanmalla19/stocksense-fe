import React from "react";
import UpdateProfilePage from "./UpdateProfilePage";

const ProfilePage = () => {
  return (
    <div>
      <h2 className="text-2xl font-bold">Profile</h2>
      <p className="text-gray-400">
        Manage your profile settings and accounts.
      </p>

      <div className="h-auto flex justify-center items-center">
        <UpdateProfilePage />
      </div>
    </div>
  );
};

export default ProfilePage;
