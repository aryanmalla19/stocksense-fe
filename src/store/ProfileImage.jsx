import React, { useState } from "react";
import { FaRegUser, FaSignOutAlt } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import { Link } from "react-router-dom";
import useAuth from "../hooks/authhooks/useAuth";
import { toast } from "react-hot-toast";
import useUserDetails from "../hooks/authhooks/useUserDetails";

const ProfileImage = ({ name, email, theme }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();

  const { userDetails } = useUserDetails();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleLogout = () => {
    logout();
    toast.success("Logout successfully");
  };

  return (
    <div className="relative">
      <div
        className="w-8 h-8 cursor-pointer shadow-md rounded-full flex items-center justify-center bg-gray-400 text-black font-bold"
        onClick={handleToggle}
      >
        {userDetails?.data?.profile_image ? (
          <img
            src={userDetails.data.profile_image}
            className="w-full h-full object-cover rounded-full"
            alt="Profile"
          />
        ) : (
          <span className="text-sm">
            {userDetails?.data?.name?.charAt(0).toUpperCase()}
          </span>
        )}
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={handleClose} />

          <div
            className={`absolute w-52 rounded-lg z-20 shadow-md ${
              theme === "dark"
                ? "bg-dark-bg text-dark-text border-black shadow-2xl"
                : "bg-light-bg text-light-text border-white"
            } border mt-2 right-0 flex flex-col`}
          >
            <div className="border-b p-2 ">
              <h1 className="font-semibold">{name}</h1>
              <p className="text-sm">{email}</p>
            </div>
            <div className="flex p-2 flex-col">
              <Link to="/profile">
                <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-hover-dark hover:text-white">
                  <FaRegUser />
                  <p className="ml-3">Profile</p>
                </div>
              </Link>
              <div className="flex items-center p-2 rounded-md cursor-pointer hover:bg-hover-dark hover:text-white">
                <Link to="/settings">
                  <div className="flex items-center py-1 cursor-pointer">
                    <IoIosSettings />
                    <p className="ml-3">Settings</p>
                  </div>
                </Link>
              </div>
            </div>
            <div
              className={` border-t  rounded-md cursor-pointer `}
              onClick={handleLogout}
            >
              <div className="hover:text-red-400 flex items-center p-2">
                <FaSignOutAlt />
                <p className="ml-3 ">Logout</p>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileImage;
