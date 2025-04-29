import axiosInstance from "./axiosInstance";

export const getAllUsers = async (page = 1) => {
  const response = await axiosInstance.get(`/admin/users?page=${page}`);
  return response?.data;
};

export const ipoDetailsFetch = async () => {
  const response = await axiosInstance.get(`/ipo-details`);
  return response?.data;
};

export const ipoDetailsPost = async (payload) => {
  const response = await axiosInstance.post("/ipo-details", payload);
  return response?.data;
};

export const ipoDetailsDelete = async (id) => {
  const response = await axiosInstance.delete(`/ipo-details/${id}`);
  return response?.data;
};

export const ipoDetailsEdit = async ({ id, updatedData }) => {
  const response = await axiosInstance.put(`/ipo-details/${id}`, updatedData);
  console.log("EDIT IPO Response:", response);
  return response?.data;
};
