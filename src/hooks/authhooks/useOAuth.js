import { useMutation } from "@tanstack/react-query";
import { oAuth } from "../../api/oAuth";

const useOAuth = () => {
  const { mutate, data } = useMutation({
    mutationFn: oAuth,
  });

  return { mutate, data };
};

export default useOAuth;
