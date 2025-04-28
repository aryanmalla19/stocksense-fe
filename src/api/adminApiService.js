import axiosInstance from "./axiosInstance";

export const getAllUsers = async (page = 1) => {
  const response = await axiosInstance.get(`/admin/users?page=${page}`);
  return response?.data;
};
