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
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to fetch the Stock list");
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
