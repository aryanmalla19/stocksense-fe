import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markAllAsRead } from "../../api/notificationApi"; 

const useMarkAllAsRead = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: markAllAsRead,
    onSuccess: () => {
      console.log("Successfully marked all notificaation as read");
      queryClient.invalidateQueries({ queryKey: ["markasread-notifications"] });
    },
    onError: (error) => {
      console.error("Error marking as read:", error);
    },
  });
  return { markAllAsRead: mutation };
};

export default useMarkAllAsRead;
