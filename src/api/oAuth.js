// services/oAuth.js or wherever your API functions are

import axiosInstance from "./axiosInstance";

export const oAuth = async ({ id_token }) => {
  const response = await axiosInstance.post(
    "/auth/google/callback",
    { id_token },
  );
  return response.data;
};
