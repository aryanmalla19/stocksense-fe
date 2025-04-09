import { useNavigate, useSearchParams } from "react-router-dom";
import useResetPassword from "../../hooks/authhooks/useResetPassword";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";

const ResetPassword = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const navigate = useNavigate();
  const { resetPasswordMutation, isLoading } = useResetPassword();

  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  useEffect(() => {
    if (!token) {
      toast.error("Invalid or expired token. Please check your email again.");
      navigate("/forgot-password");
    }
  }, [token, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    resetPasswordMutation.mutate(
      { token, newPassword },
      {
        onSuccess: () => {
          toast.success("Password has been reset successfully!");
          navigate("/login");
        },
        onError: (err) => {
          toast.error(err?.message || "Failed to reset password");
        },
      }
    );
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-md w-full max-w-[500px]">
        <h1 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Reset Your Password
        </h1>
        <form onSubmit={handleSubmit}>
          <label className="block text-sm font-semibold text-gray-700 mb-1">
            New Password
          </label>
          <input
            type="password"
            required
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4 focus:outline-none"
          />

          <label className="block text-sm font-semibold text-gray-700 mb-1">
            Confirm Password
          </label>
          <input
            type="password"
            required
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6 focus:outline-none"
          />

          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition cursor-pointer"
          >
            {isLoading ? "Resetting..." : "Reset Password"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
