import useAuthStore from "../../store/authStore";

const useAuth = () => {
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const clearToken = useAuthStore((state) => state.clearToken);

  const login = (accessToken, refreshToken) => {
    setToken({ accessToken, refreshToken });
  };

  const logout = () => {
    clearToken();
  };

  return { token, login, logout };
};

export default useAuth;
