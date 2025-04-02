import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api/v1",
  withCredentials: true,
});

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/register", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data.errors);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const loginUser = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/login", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data.errors);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
