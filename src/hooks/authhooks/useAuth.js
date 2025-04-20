import useAuthStore from "../../store/authStore";

const useAuth = () => {
  const accessToken = useAuthStore((state) => state.accessToken);
  const refreshToken = useAuthStore((state) => state.refreshToken);
  const setTokens = useAuthStore((state) => state.setTokens);
  const clearTokens = useAuthStore((state) => state.clearTokens);

  const login = (accessToken, refreshToken) => {
    setTokens(accessToken, refreshToken);
  };

  const logout = () => {
    clearTokens();
  };

  return { accessToken, refreshToken, login, logout };
};

export default useAuth;