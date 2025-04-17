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
export const stockList = async ({ page = 1, limit = 5 }) => {
  try {
    const response = await axiosInstance.get(
      `/stocks?page=${page}&limit=${limit}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to fetch the Stock list");
  }
};

//search query
export const searchQuery = async (search) => {
  try {
    const response = await axiosInstance.get(`/stocks`, {
      params: { search },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to search the stock list");
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

export const fetchStockBYId = async (StocksID) => {
  try {
    const response = await axiosInstance.get(`/stocks/${StocksID}`);
    return response.data;
  } catch (error) {
    console.log(
      "Error fetching individual stocks",
      error.response?.data || error
    );
    throw error ?? new Error("Failed to fetch the Stock list");
  }
};

export const postStockWatchList = async (stockID) => {
  try {
    const response = await axiosInstance.post("/users/watchlists", {
      stock_id: Number(stockID),
    });
    console.log(response);
    return response.data;
  } catch (error) {
    console.error(
      "Error posting stocks watchlist:",
      error.response?.data || error
    );
    throw error;
  }
};

export const fetchStockWatchList = async () => {
  try {
    const response = await axiosInstance.get("/users/watchlists");
    return response.data;
  } catch (error) {
    console.log(
      "Error fetching stocks watchlist:",
      error.response?.data || error
    );
    throw error;
  }
};

export const deleteStockWatchList = async (stockID) => {
  try {
    const response = await axiosInstance.delete(`/users/watchlists/${stockID}`);
    return response.data;
  } catch (error) {
    console.log(
      "Error deleting stocks watchlist:",
      error.response?.data || error
    );
    throw error;
  }
};

export const pagination = async () => {
  try {
    const response = await axiosInstance.get("");
    return response.data;
  } catch (error) {
    console.log("Error in Pagination", error.response?.data || error);
    throw error;
  }
};


// Function to enable two factor OTP
export const enableTwoFactor = async () => {
  try {
    const response = await axiosInstance.post("/auth/2fa/enable");
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to enable the two factor");
  }
};

// Function to disable two factor OTP
export const disableTwoFactor = async () => {
  try {
    const response = await axiosInstance.post("/auth/2fa/disable");
    console.log(response);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to disable the two factor");
  }
};
