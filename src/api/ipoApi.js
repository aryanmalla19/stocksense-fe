import axiosInstance from "./axiosInstance";

export const IpoDetails = async (id = null) => {
  const endpoint = id ? `/ipo-details/${id}` : "/ipo-details";
  const response = await axiosInstance.get(endpoint);
  return response.data;
};
