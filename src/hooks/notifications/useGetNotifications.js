import { useQuery } from "@tanstack/react-query";
import { fetchNotifications } from "../../api/notificationApi.js";

const useGetNotifications = (page) => {
  const { data, refetch } = useQuery({
    queryKey: ["notifications", page],
    queryFn: () => fetchNotifications(page),
  });
  return { data:data, refetch };
};

export default useGetNotifications;
