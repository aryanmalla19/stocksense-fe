import axiosInstance from "./axiosInstance";

export const pieChart = async () => {
  const response = await axiosInstance.get("/stats/sectors");
  return response.data;
};

export const individualChart = async () => {
  const response = await axiosInstance.get("/users/stats/sectors");
  return response.data;
};
