import axiosInstance from "./axiosInstance";

export const stockList = async ({ page, per_page = 10 }) => {
  const response = await axiosInstance.get("/stocks", {
    params: { page, per_page },
  });
  return response.data;
};

export const sortStocks = async (sortBy, sortOrder, page) => {
  try {
    const response = await axiosInstance.get(`/stocks`, {
      params: {
        column: sortBy,
        direction: sortOrder,
        page: page,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching sorted stocks:", error);
    throw error;
  }
};

export const searchQuery = async (searchText) => {
  const response = await axiosInstance.get(`/stocks`, {
    params: { symbol: searchText },
  });
  return response.data;
};

export const fetchStockBYId = async (StocksID) => {
  try {
    const response = await axiosInstance.get(`/stocks/${StocksID}`);
    console.log(response?.data);
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
    return response.data?.data;
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

export const history = async (id) => {
  const response = await axiosInstance.get(`/stocks/${id}/history`);
  return response.data;
};

export const UserSetting = async () => {
  try {
    const response = await axiosInstance.get("/users/settings");
    return response?.data.data;
  } catch (error) {
    console.error(
      "Error fetching User Settings details:",
      error.response?.data || error
    );
    throw error ?? new Error("Failed to fetch User Settings details");
  }
};

export const applyIpo = async ({ ipoId, appliedShares }) => {
  try {
    const response = await axiosInstance.post("/ipo-applications", {
      ipo_id: ipoId,
      applied_shares: appliedShares,
    });
    return response.data;
  } catch (error) {
    console.error(
      "Error Applying Ipo Applications:",
      error.response?.data || error
    );
    throw error ?? new Error("Failed to post ipo applications");
  }
};

export const UserPortfolio = async () => {
  try {
    const response = await axiosInstance.get("/portfolios");
    return response?.data?.data;
  } catch (error) {
    console.error(
      "Error fetching User Protfolio details:",
      error.response?.data || error
    );
    throw error ?? new Error("Failed to fetch User Protfolio details");
  }
};
