import axios from "axios";
import Cookies from "js-cookie";

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
    throw error.response.data ?? new Error("Register failed");
  }
};

export const loginUser = async (data) => {
  try {
    Cookies.set("email", data['email']);
    const response = await axiosInstance.post("/auth/login", data);
    console.log(response);
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
    throw error.response.data ?? new Error("Forgot Password failed");
  }
};

export const resetPassword = async ({
  password,
  password_confirmation,
  token,
  email,
}) => {
  try {
    const response = await axiosInstance.post(
      `/auth/reset-password?token=${token}&email=${email}`,
      {
        password,
        password_confirmation,
      }
    );
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response?.data);
    throw error.response?.data ?? new Error("Password reset failed");
  }
};


export const verifyOTP = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/verify-otp", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error.response.data ?? new Error("OTP verification failed");
  }
};