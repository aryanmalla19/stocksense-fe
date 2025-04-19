import React from "react";
import { IoIosNotifications, IoIosSettings } from "react-icons/io";

const NotificationPage = () => {
  return (
    <div className="relative cursor-pointer hover:scale-110 transition-transform">
      <IoIosNotifications className="w-6 h-6" />
      <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex justify-center items-center rounded-full">
        1
      </div>
    </div>
  );
};

export default NotificationPage;
