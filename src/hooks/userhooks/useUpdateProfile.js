import { useMutation } from "@tanstack/react-query";
import { profileUpdate } from "../../api/userApi";
import toast from "react-hot-toast";

const useUpdateProfile = () => {
  const mutation = useMutation({
    mutationFn: profileUpdate,
    onSuccess: () => {
      toast.success("Profile Updated successfully");
    },
    onError: () => {
      toast.error("Profile Updation failed");
    },
  });
  return { updateProfile: mutation.mutate };
};

export default useUpdateProfile;
