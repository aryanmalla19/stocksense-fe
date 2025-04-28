import axiosInstance from "./axiosInstance";

export const getAllUsers = async () => {
  const response = await axiosInstance.get("/admin/users");
  console.log(response?.data);
  return response?.data?.data;
};