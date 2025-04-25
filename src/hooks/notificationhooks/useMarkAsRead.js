import { useMutation, useQueryClient } from "@tanstack/react-query";
import { markAsRead } from "../../api/notificationApi";

const useMarkAsRead = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: markAsRead,
    onSuccess: () => {
      console.log("Successfully marked notificaation as read");
      queryClient.invalidateQueries({ queryKey: ["notifications"] });
    },
    onError: (error) => {
      console.error("Error marking as read:", error);
    }, 
  });
  return { markAsRead: mutation };
};

export default useMarkAsRead;
