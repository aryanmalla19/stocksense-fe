import React, { useEffect } from "react";
import useEmailverify from "../../hooks/authhooks/useEmailverify";
import { useSearchParams } from "react-router-dom";

const VerifyEmail = () => {
  const [searchparams] = useSearchParams();
  const token = searchparams.get("access_token");
  const mutation = useEmailverify();

  useEffect(() => {
    if (token) {
      mutation.mutate(token);
    }
  }, [token]);
  return (
    <div>
      <p>Verifying email ...and... Redirecting to login page</p>
    </div>
  );
};

export default VerifyEmail;
