import axiosInstance from "./axiosInstance";

export const stockList = async ({ page, per_page = 10 }) => {
  const response = await axiosInstance.get("/stocks", {
    params: { page, per_page },
  });
  return response.data;
};

export const sortStocks = async (params) => {
  const response = await axiosInstance.get("/stocks", {
    params: {
      column: params?.queryKey[1].column,
      direction: params?.queryKey[1].direction,
    },
  });
  return response.data;
};

export const searchQuery = async (searchText) => {
  const response = await axiosInstance.get(`/stocks`, {
    params: { symbol: searchText },
  });
  return response.data;
};

export const fetchStockBYId = async (StocksID) => {
  const response = await axiosInstance.get(`/stocks/${StocksID}`);
  return response.data;
};

export const history = async (id) => {
  const response = await axiosInstance.get(`/stocks/${id}/history`);
  return response.data;
};
