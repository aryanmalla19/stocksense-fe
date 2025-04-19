import axiosInstance from "./axiosInstance";

export const postStockWatchList = async (stockID) => {
  const response = await axiosInstance.post("/users/watchlists", {
    stock_id: Number(stockID),
  });
  return response.data;
};

export const fetchStockWatchList = async () => {
  const response = await axiosInstance.get("/users/watchlists");
  return response.data;
};

export const deleteStockWatchList = async (stockID) => {
  const response = await axiosInstance.delete(`/users/watchlists/${stockID}`);
  return response.data;
};
