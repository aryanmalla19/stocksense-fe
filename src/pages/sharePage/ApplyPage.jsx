import React, { useContext, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Input from "../../components/common/Input";
import useApplyShare from "../../hooks/useApplyShare";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";
import { useParams } from "react-router-dom";
import useApplyIpo from "../../hooks/ipohooks/useApplyIpo";
import toast from "react-hot-toast";

// Reusable Input Field
const InputField = ({ label, placeholder, value, onChange, readOnly = false }) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">{label}</label>
    <Input
      type="number"
      placeholder={placeholder}
      className={`p-2 border rounded-md focus:outline-none bg-white text-black ${readOnly ? "opacity-80 cursor-not-allowed" : ""}`}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

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
  } = useApplyShare(ipo?.issue_price);
  
  const { mutate: submitIpoApplication, isPending, isSuccess, isError, error } = useApplyIpo();

  const handleSubmit = () => {
    submitIpoApplication(
      { ipoId: ipo.id, appliedShares: kittaAmount },
      {
        onSuccess: (data) => {
          console.log("Application submitted", data);
          toast.success("Application submitted");
        },
        onError: (err) => {
          console.error("Failed to apply", err);
          toast.error(err?.response.data.message);
        },
      }
    );
  };

  if (isLoading) return <p className="text-gray-500 p-4">Loading IPO details...</p>;

  return (
    <div className={`p-6 rounded-lg min-h-screen ${isDark ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-800"}`}>
      {/* IPO Summary Card */}
      <div className={`rounded-lg p-5 shadow-md mb-8 ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <h2 className="text-xl font-semibold mb-4">IPO Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-sm">
          <div><strong>Company:</strong> {ipo.company_name}</div>
          <div><strong>Symbol:</strong> {stock?.symbol}</div>
          <div><strong>Sector:</strong> {stock?.sector}</div>
          <div><strong>Issue Price:</strong> Rs. {ipo.issue_price}</div>
          <div><strong>Current Market Price:</strong> Rs. {ipo?.issue_price}</div>
          <div><strong>Total Shares:</strong> {ipo.total_shares}</div>
          <div><strong>Open Date:</strong> {ipo.open_date}</div>
          <div><strong>Close Date:</strong> {ipo.close_date}</div>
          <div><strong>Listing Date:</strong> {ipo.listing_date}</div>
        </div>
      </div>

      {/* Application Form */}
      <div className={`rounded-lg p-6 shadow-lg max-w-2xl mx-auto ${isDark ? "bg-gray-800" : "bg-white"}`}>
        <h3 className="text-lg font-semibold mb-4">Apply for Shares</h3>
        <div className="flex flex-col gap-4">
          <InputField
            label="Applied Kitta"
            placeholder="Enter number of kittas"
            value={kittaAmount}
            onChange={handleChange}
          />

          <InputField
            label="Total Amount (Rs.)"
            placeholder="Amount auto-calculated"
            value={amount}
            readOnly
          />

          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="terms"
              className="h-4 w-4 accent-teal-700"
              checked={agreedTerm}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms" className="text-sm font-medium">
              I agree to the{" "}
              <span className="text-teal-600 underline cursor-pointer">Terms and Conditions</span>
            </label>
          </div>

          <button
            onClick={handleSubmit}
            disabled={!agreedTerm}
            className={`mt-4 cursor-pointer px-6 py-2 rounded-md font-medium text-white transition ${
              agreedTerm
                ? "bg-teal-700 hover:bg-teal-600"
                : "bg-teal-700 opacity-50 cursor-not-allowed"
            }`}
          >
            {isPending ? "Submitting..." : isSuccess ? "Applied!" : "Submit Application"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
