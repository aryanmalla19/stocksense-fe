import { useQuery } from "@tanstack/react-query";
import { Users } from "../../api/userApi";

const useUserDetails = () => {
  const { data } = useQuery({
    queryKey: ["users"],
    queryFn: Users,
  });
  return { userDetails: data };
};

export default useUserDetails;
