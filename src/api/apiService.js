import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

export const register = async (data) => {
  try {
    const response = await axiosInstance.post("/register", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data.errors);
    throw new Error(error.response?.data?.message || "Registration failed");
  }
};

export const login = async (data) => {
  try {
    const response = await axiosInstance.post("/login", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data.errors);
    throw new Error(error.response?.data?.message || "Login failed");
  }
};
