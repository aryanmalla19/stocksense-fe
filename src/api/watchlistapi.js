import axiosInstance from "./axiosInstance";

export const postStockWatchList = async (stockID) => {
  const response = await axiosInstance.post("/watchlists", {
    stock_id: Number(stockID),
  });
  return response.data;
};

export const fetchStockWatchList = async () => {
  const response = await axiosInstance.get("/watchlists");
  return response?.data;
};

export const deleteStockWatchList = async (stockID) => {
  const response = await axiosInstance.delete(`/watchlists/${stockID}`);
  return response.data;
};

export const deleteAllStock = async () => {
  try {
    const response = await axiosInstance.delete(`/watchlists/multiple-delete`);
    return response.data;
  } catch (error) {
    console.log(
      "Error deleting stocks watchlist:",
      error.response?.data || error
    );
    throw error;
  }
};
