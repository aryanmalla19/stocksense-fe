import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ThemeContext } from "../../context/ThemeContext";
import useApplyShare from "../../hooks/useApplyShare";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";
import useApplyIpo from "../../hooks/ipohooks/useApplyIpo";
import IPOApplyform from "./IPOApplyform";
import {
  FiTrendingUp,
  FiCalendar,
  FiDollarSign,
  FiLayers,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";
import ApplyShareOverview from "./ApplyShareOverview";

const ApplyPage = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const { id } = useParams();

  const { data, isLoading } = useFetchIpoDetail(id);
  const ipo = data?.data;
  const stock = ipo?.stock;

  const {
    kittaAmount,
    amount,
    agreedTerm,
    handleChange,
    handleTermsChange,
    error,
  } = useApplyShare(ipo?.issue_price);

  const { mutate: submitIpoApplication, isPending, isSuccess } = useApplyIpo();

  const handleSubmit = () => {
    if (error) {
      toast.error(error);
      return;
    }

    submitIpoApplication(
      { ipoId: ipo.id, appliedShares: kittaAmount },
      {
        onSuccess: () => toast.success("Application submitted successfully!"),
        onError: (err) => {
          console.error("Failed to apply", err);
          toast.error(
            err?.response?.data?.message || "Failed to submit application"
          );
        },
      }
    );
  };

  if (isLoading)
    return <p className="text-gray-500 p-4">Loading IPO details...</p>;
  if (!ipo) return <p className="text-gray-500 p-4">IPO not found</p>;

  return (
    <>
      <ApplyShareOverview ipo={ipo} stock={stock} isDark={isDark} />

      {/* Application Form */}
      <div
        className={`rounded-lg p-6 shadow-lg max-w-2xl mx-auto mt-8 ${
          isDark ? "bg-gray-800" : "bg-white"
        }`}
      >
        <h3 className="text-lg font-semibold mb-4">Apply for Shares</h3>
        <IPOApplyform
          kittaAmount={kittaAmount}
          handleChange={handleChange}
          amount={amount}
          agreedTerm={agreedTerm}
          handleTermsChange={handleTermsChange}
          handleSubmit={handleSubmit}
          isPending={isPending}
          isSuccess={isSuccess}
          error={error}
          minKitta={1}
          maxKitta={ipo.max_shares_per_investor || 1000}
        />
      </div>
    </>
  );
};

const InfoCard = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-3">
      <div className="p-2 rounded-full bg-teal-100 dark:bg-teal-900/50 text-teal-600 dark:text-teal-300">
        {icon}
      </div>
      <div>
        <div className="text-sm text-gray-600 dark:text-gray-400">{label}</div>
        <div className="font-medium">{value}</div>
      </div>
    </div>
  );
};

export default ApplyPage;
