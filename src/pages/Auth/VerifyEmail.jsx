import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import useAuthStore from "../../store/authStore";

const VerifyEmail = () => {
  const [searchparams] = useSearchParams();
  const accessToken = searchparams.get("access_token");
  const refreshToken = searchparams.get("refresh_token");
  const setTokens = useAuthStore((state) => state.setTokens);
  const navigate = useNavigate();

  useEffect(() => {
    if (accessToken && refreshToken) {
      setTokens(accessToken, refreshToken);
      navigate("/login");
    }
  }, [accessToken, refreshToken]);

  return (
    <div>
      <p>Verifying email... and redirecting to login page</p>
    </div>
  );
};

export default VerifyEmail;
