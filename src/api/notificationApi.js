import axiosInstance from "./axiosInstance";

export const fetchNotifications = async () => {
  try {
    const response = await axiosInstance.get("/users/notifications");
    return response.data?.data;
  } catch (error) {
    console.log(
      "Error fetching user notification :",
      error.response?.data || error
    );
    throw error;
  }
};

export const markAllAsRead = async () => {
  try {
    const response = await axiosInstance.get("/users/markasread-notifications");
    return response.data?.data;
  } catch (error) {
    console.log(
      "Error marking user notification as read :",
      error.response?.data || error
    );
    throw error;
  }
};