import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from "../../api/notificationApi.js";

const useGetNotifications = () => {
  const { data, refetch } = useQuery({
    queryKey: ["notifications"],
    queryFn: fetchNotifications,
  });
  return { data, refetch };
};

export default useGetNotifications;
