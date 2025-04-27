import axiosInstance from "./axiosInstance";

export const Users = async () => {
  const response = await axiosInstance.get("/profile");
  return response?.data;
};

export const emailverify = async (token) => {
  const response = await axiosInstance.get(
    `/auth/email/verify?access_token=${token}`
  );
  console.log("Email verification:", response);
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

export const profileUpdate = async (data) => {
  const response = await axiosInstance.post("/profile", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};
