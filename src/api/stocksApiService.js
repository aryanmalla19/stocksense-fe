import axios from "axios";

const authState = JSON.parse(localStorage.getItem("auth-storage"));
const token = authState?.state?.token;
console.log(token);
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

// Function to fetch stock data
export const stockList = async () => {
  try {
    const response = await axiosInstance.get("/stocks");
    console.log("Full API Response:", response); // Log full response to see its structure
    console.log("API Response Data:", response.data); // Check just the data part

    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to fetch the Stock list");
  }
};


export const changePassword = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/change-password", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error.response.data ?? new Error("Password change failed");
  }
};