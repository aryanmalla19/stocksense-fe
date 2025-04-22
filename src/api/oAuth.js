import axios from "axios";

export const oAuth = async () => {
  const response = await axios.get("http://localhost:8000/auth/google", {
    withCredentials: true,
  });
  return response;
};
