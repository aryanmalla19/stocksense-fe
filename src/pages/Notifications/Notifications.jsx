import React, { useContext, useState, useEffect } from "react";
import useGetNotifications from "../../hooks/notificationhooks/useGetNotifications";
import { ThemeContext } from "../../context/ThemeContext";
import getTimeDifference from "./getTimeDifference";
import useMarkAllAsRead from "../../hooks/notificationhooks/useMarkAllAsRead.js";
import useMarkAsRead from "../../hooks/notificationhooks/useMarkAsRead.js";
import Pagination from "../stockPage/Pagination.jsx";

const Notifications = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const { data, refetch } = useGetNotifications(pageNumber);
  const { theme } = useContext(ThemeContext);
  const { markAllAsRead } = useMarkAllAsRead();
  const [loading, setLoading] = useState(false);
  const { markAsRead } = useMarkAsRead();

   const links = data?.links ?? {};
   console.log(links);

  console.log(data);

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

  useEffect(() => {
    refetch();
  }, [pageNumber, refetch]);

 

  return (
    <>
      <div
        className={`outlet-container shadow h-140 p-4 rounded-md overflow-auto scrollbar-hidden ${
          theme === "dark"
            ? "bg-dark-bg text-dark-text"
            : "bg-light-bg text-light-text"
        }`}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold">Notifications</h2>
          <button
            onClick={handleClick}
            className="cursor-pointer py-2 px-4 rounded bg-purple-500 text-white disabled:bg-gray-400"
            disabled={loading || data?.length === 0 || allNotificationsRead}
          >
            {loading ? "Marking as read..." : "Mark All As Read"}
          </button>
        </div>
        {data?.length > 0 ? (
          <ul className="space-y-3">
            {data.map((notification, index) => (
              <li
                key={index}
                onClick={() => handleMarkAsRead(notification.id)}
                className={`border p-3 rounded cursor-pointer ${
                  theme === "dark" ? "border-gray-600" : "border-gray-300"
                } ${!notification.read_at ? "bg-purple-500" : ""}`}
              >
                <p className="font-medium">{notification.notification}</p>
                <p
                  className={`text-xs ${
                    !notification.read_at ? "font-semibold" : "text-gray-500"
                  }`}
                >
                  {!notification.read_at
                    ? `New • ${getTimeDifference(notification.time)}`
                    : getTimeDifference(notification.time)}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No notifications found.</p>
        )}
      </div>

      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        links={links?.links}
      />
    </>
  );
};

export default Notifications;
