import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use((config) => {
  const authState = JSON.parse(localStorage.getItem("auth-storage"));
  const token = authState?.state?.token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default axiosInstance;

// Function to fetch stock data
export const stockList = async ({ page, per_page = 10 }) => {
  try {
    const response = await axiosInstance.get(`/stocks`, {
      params: {
        page: page,
        per_page: per_page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to fetch the Stock list");
  }
};

export const sortStocks = async (params) => {
  try {
    // console.log(params?.queryKey[1]);
    const response = await axiosInstance.get(`/stocks`, {
      params: {
        column: params?.queryKey[1].column,
        direction: params?.queryKey[1].direction,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sorted stocks:", error);
    throw error;
  }
};

//search query
export const searchQuery = async (searchText) => {
  try {
    const response = await axiosInstance.get(`/stocks?symbol=${searchText}`, {
      params: { searchText },
    });
    return response.data;
  } catch (error) {
    console.log("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to search the stock list");
  }
};

//function to change password
export const changePassword = async (data) => {
  try {
    const response = await axiosInstance.post("/auth/change-password", data);
    return response.data;
  } catch (error) {
    console.error("Validation Errors:", error.response.data);
    throw error.response.data ?? new Error("Password change failed");
  }
};

//function to fetch Stockby Id
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

//function to post watchlist
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

//function to get watchlist
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

//function to delete watchlist
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

//function for pagination
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
    return response.data;
  } catch (error) {
    console.error("Error fetching stocks:", error.response?.data || error);
    throw error ?? new Error("Failed to disable the two factor");
  }
};

export const IpoDetails = async (id = null) => {
  try {
    const endpoint = id ? `/ipo-details/${id}` : "/ipo-details";
    const response = await axiosInstance.get(endpoint);
    return response.data;
  } catch (error) {
    console.error("Error fetching IPO details:", error.response?.data || error);
    throw error ?? new Error("Failed to fetch IPO details");
  }
};
