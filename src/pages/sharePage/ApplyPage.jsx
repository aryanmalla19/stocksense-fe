import React, { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { ThemeContext } from "../../context/ThemeContext";
import useApplyShare from "../../hooks/useApplyShare";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";
import useApplyIpo from "../../hooks/ipohooks/useApplyIpo";
import IPOApplyform from "./IPOApplyform";
import ApplyShareOverview from "./ApplyShareOverview";
import { FiCheckCircle } from "react-icons/fi";

const ApplyPage = () => {
  const { theme } = useContext(ThemeContext);
  const isDark = theme === "dark";
  const { id } = useParams();
  const navigate = useNavigate();

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
        onSuccess: () => {
          toast.success("Application submitted successfully!");
          navigate("/ipo-list");
        },
        onError: (err) => {
          console.error("Failed to apply", err);
          toast.error(
            err?.response?.data?.message || "Failed to submit application"
          );
        },
      }
    );
  };

  // ⛔️ These should stay outside of handleSubmit
  if (isLoading)
    return <p className="text-gray-500 p-4">Loading IPO details...</p>;
  if (!ipo) return <p className="text-gray-500 p-4">IPO not found</p>;

  return (
    <div className="outlet-container shadow-md mt-3">
      <ApplyShareOverview ipo={ipo} stock={stock} isDark={isDark} />

      {/* Application Form */}
      <div className="flex gap-4 max-w-full">
        <div
          className={`rounded-lg p-6 shadow-lg mx-auto mt-2 w-1/2 ${
            isDark ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
          }`}
        >
          <h3 className="text-2xl font-semibold mb-4 flex items-center justify-center gap-2">
            <FiCheckCircle className="p-2 rounded-full text-3xl bg-purple-button text-white" />
            Apply for Shares
          </h3>
          <IPOApplyform
            isDark={isDark}
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

        {/* Important Information Section */}
        <div
          className={`rounded-lg p-6 shadow-lg mx-auto mt-2 ${
            isDark ? "bg-dark-bg text-dark-text" : "bg-light-bg text-light-text"
          }`}
        >
          <h4 className="text-lg font-semibold mb-2">Important Information</h4>
          <ul className="list-disc list-inside text-sm leading-relaxed space-y-2">
            <li>
              Please verify all details before submitting your application.
            </li>
            <li>
              Once submitted, your application cannot be edited or canceled.
            </li>
            <li>
              Ensure you have sufficient balance in your bank account to cover
              the total amount.
            </li>
            <li>
              You will receive a confirmation notification once your application
              is successful.
            </li>
            <li>
              Applying multiple times using the same credentials may lead to
              disqualification.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
