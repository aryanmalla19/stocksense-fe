import { useQuery } from "@tanstack/react-query";
import { Users } from "../../api/userApi";

const useUserDetails = () => {
  const { data, refetch } = useQuery({
    queryKey: ["users"],
    queryFn: Users,
  });
  return { userDetails: data, refetch };
};

export default useUserDetails;
