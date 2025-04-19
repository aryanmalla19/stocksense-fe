import { useMutation } from "@tanstack/react-query";
import { applyIpo } from "../../api/stocksApiService";

const useApplyIpo = () => {
  return useMutation({
    mutationFn: applyIpo,
  });
};


export default useApplyIpo;

