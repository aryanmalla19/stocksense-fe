import React, { useContext } from "react";
import UpdateProfilePage from "./UpdateProfilePage";
import { ThemeContext } from "../../../context/ThemeContext";

const ProfilePage = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 ">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">Profile</h1>
          <p>Manage your profile settings and accounts.</p>
        </div>
      </div>

      <div
        className={`outlet-container rounded-md transition-colors duration-300  h-120  ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <div className="h-27 p-8  bg-purple-button rounded-md">
          <UpdateProfilePage theme={theme} />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
