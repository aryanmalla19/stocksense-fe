import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/adminApiService";

const useUsers = () => {
  const { data, refetch, error } = useQuery({
    queryKey: ["users"],
    queryFn: getAllUsers,
  });
  return { data, refetch, error };
};

export default useUsers;
