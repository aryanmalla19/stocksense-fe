import React, { useContext, useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import useGetNotifications from "../../hooks/notifications/useGetNotifications.js";
import getTimeDifference from "../Notifications/getTimeDifference";
import { ThemeContext } from "../../context/ThemeContext";
import { useNavigate } from "react-router-dom";
import useMarkAllAsRead from "../../hooks/notifications/useMarkAllAsRead.js";
import useMarkAsRead from "../../hooks/notifications/useMarkAsRead.js";

const NotificationPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data, refetch } = useGetNotifications();
  const { theme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const { markAllAsRead } = useMarkAllAsRead();
  const [loading, setLoading] = useState(false);

  const { markAsRead } = useMarkAsRead();

    const allNotificationsRead =
      data?.length > 0 && data.every((notification) => notification.read_at);

    const handleClick = async () => {
      try {
        setLoading(true);
        await markAllAsRead.mutateAsync();
        refetch();
      } catch (error) {
        console.error("Error:", error);
      } finally {
        setLoading(false);
      }
    };

    const handleMarkAsRead = async (id) => {
      try {
        await markAsRead.mutateAsync(id);
      } catch (error) {
        console.error("Error:", error);
      } 
    };

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
        className="cursor-pointer"
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
            className={`absolute border right-0 mt-2 w-80 max-h-96 overflow-auto scrollbar-hidden rounded-md shadow-lg z-50 ${
              theme === "dark"
                ? "bg-dark-bg text-dark-text border-gray-800"
                : "bg-light-bg text-light-text border-gray-200"
            }`}
          >
            <div className="p-4">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-bold">Notifications</h2>
                <button
                  onClick={handleClick}
                  className="cursor-pointer py-1 px-4 rounded text-blue-300 disabled:text-gray-400 text-sm font-bold"
                  disabled={
                    loading || data?.length === 0 || allNotificationsRead
                  }
                >
                  {loading ? "Marking as read..." : "Mark All As Read"}
                </button>
              </div>
              {data?.length > 0 ? (
                <>
                  <ul className="space-y-3">
                    {displayedNotifications.map((notification, index) => (
                      <li
                        key={index}
                        onClick={() => handleMarkAsRead(notification.id)}
                        className={`border p-3 rounded cursor-pointer ${
                          theme === "dark"
                            ? "border-gray-600"
                            : "border-gray-300"
                        } ${!notification.read_at ? "bg-purple-500 text-white" : ""}`}
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
                      className={`mt-3 text-sm font-bold hover:underline ${theme === "dark" ? "text-dark-text" : "text-light-text"}`}
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
