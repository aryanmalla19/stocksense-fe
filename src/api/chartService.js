import axiosInstance from "./axiosInstance";

export const pieChart = async () => {
  const response = await axiosInstance.get("/stats/sectors");
  return response.data;
};
