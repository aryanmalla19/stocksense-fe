import React, { useContext, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import useGetNotifications from "../../hooks/notificationhooks/useGetNotifications";
import getTimeDifference from "../Notifications/getTimeDifference";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const NotificationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data } = useGetNotifications();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

const handleClose = () => {
  setIsOpen(false);
};

  const handleShowMore = () => {
    navigate("/notifications");
    setIsOpen(false);
  };

  const maxDisplay = 4;
  const displayedNotifications = data?.slice(0, maxDisplay) || [];

  return (
    <div className="relative">
      <div
        className="cursor-pointer hover:scale-110 transition-transform"
        onClick={handleToggle}
      >
        <IoIosNotifications className="w-6 h-6" />
        <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold w-4 h-4 flex justify-center items-center rounded-full">
          {data?.filter((n) => !n.read_at).length ?? 0}
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={handleClose} />
          <div
            className={`absolute right-0 mt-2 w-80 max-h-96 overflow-auto scrollbar-hidden rounded-md shadow-lg z-50 ${
              theme === "dark"
                ? "bg-gray-800 text-white"
                : "bg-white text-black"
            }`}
          >
            <div className="p-4">
              <h3 className="text-lg font-semibold mb-2 ">
                Notifications
              </h3>
              {data?.length > 0 ? (
                <>
                  <ul className="space-y-3">
                    {displayedNotifications.map((notification, index) => (
                      <li
                        key={index}
                        className={`border p-3 rounded ${
                          theme === "dark"
                            ? "border-gray-600"
                            : "border-gray-300"
                        } ${!notification.read_at ? "bg-purple-500" : ""}`}
                      >
                        <p className="font-medium">
                          {notification.notification}
                        </p>
                        <p
                          className={`text-xs ${
                            !notification.read_at
                              ? "font-semibold"
                              : "text-gray-500"
                          }`}
                        >
                          {!notification.read_at
                            ? `New • ${getTimeDifference(notification.time)}`
                            : getTimeDifference(notification.time)}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {data.length > maxDisplay && (
                    <button
                      onClick={handleShowMore}
                      className="mt-3 text-sm [color:#9D14BF] hover:underline"
                    >
                      Show More
                    </button>
                  )}
                </>
              ) : (
                <p className="text-sm text-gray-500">No notifications found.</p>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default NotificationPage;
