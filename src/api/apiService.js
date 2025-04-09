import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error ?? new Error("Register failed");
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error.response.data ?? new Error("Login failed");
  }
};

export const verifyEmail = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/email/resend", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error.response.data ?? new Error("Reverifying email failed");
  }
};

export const forgotPassword = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/forgot-password", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error.response.data ?? new Error("Password reset failed");
  }
};
