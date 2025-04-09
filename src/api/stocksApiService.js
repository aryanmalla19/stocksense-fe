import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

export const stockList = async (data) => {
  try {
    const response = await axiosInstance.post("/stocks", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error ?? new Error("Failed to fetch the Stock list");
  }
};
