import axiosInstance from "./axiosInstance";

export const IpoDetails = async (id = null) => {
  const endpoint = id ? `/ipo-details/${id}` : "/ipo-details";
  const response = await axiosInstance.get(endpoint);
  return response.data;
};

export const buySell = async (payload) => {
  try {
    const response = await axiosInstance.post("/transactions", payload);
    console.log("API response:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error buying or selling stocks",
      error.response?.data || error
    );
    throw error;
  }
};

export const Holdings = async () => {
  const response = await axiosInstance.get("/transactions");
  return response.data;
};
