import axiosInstance from "./axiosInstance";

export const Users = async () => {
  const response = await axiosInstance.get("/users/portfolios");
  return response.data;
};

export const changePassword = async (data) => {
  const response = await axiosInstance.post("/auth/change-password", data);
  return response.data;
};

export const enableTwoFactor = async () => {
  const response = await axiosInstance.post("/auth/2fa/enable");
  return response.data;
};

export const disableTwoFactor = async () => {
  const response = await axiosInstance.post("/auth/2fa/disable");
  return response.data;
};
