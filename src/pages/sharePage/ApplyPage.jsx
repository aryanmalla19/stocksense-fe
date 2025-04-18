import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Input from "../../components/common/Input";
import useApplyShare from "../../hooks/useApplyShare";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";
import { useParams } from "react-router-dom";

// Reusable Input Section
const InputSection = ({ label, placeholder, value, onChange, readOnly, theme }) => (
  <div className="flex flex-col sm:flex-row gap-4">
    <label className="w-full sm:w-80">{label}</label>
    <Input
      type="number"
      placeholder={placeholder}
      className={`w-full sm:w-[500px] ${theme === "light" ? "" : "bg-gray-300"
        } border text-black p-2 rounded-md focus:outline-none`}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);
const ApplyPage = () => {
  const { theme } = useContext(ThemeContext);
  const { id } = useParams();
  const { data, refetch, isLoading, error } = useFetchIpoDetail(id);

  const ipo = data?.data; // safely grab IPO details
  const {
    kittaAmount,
    amount,
    agreedTerm,
    handleChange,
    handleTermsChange,
  } = useApplyShare(ipo?.issue_price); // pass issue price dynamically

  useEffect(() => {
    if (ipo) {
      console.log("IPO detail:", ipo);
    }
  }, [ipo]);

  if (isLoading) return <p>Loading IPO info...</p>;
  if (error) return <p>Error loading IPO info</p>;

  return (
    <div
      className={`rounded-md px-4 py-10 flex flex-col gap-4 ${theme === "dark" ? "bg-gray-800 text-white" : "bg-white text-gray-800"
        }`}
    >
      <div className="grid gap-6">
        {/* BOID Section */}
        <InputSection
          label="BOID"
          value={ipo?.id}
        />


        <InputSection
          label="Issue Price"
          value={ipo?.issue_price}
        />

        {/* Applied Kitta Input */}
        <InputSection
          label="Applied Kitta"
          placeholder="Enter Applied Kitta"
          value={kittaAmount}
          onChange={handleChange}
        />

        {/* Amount Display */}
        <InputSection
          label="Amount"
          placeholder="Amount will be calculated"
          value={amount}
          readOnly
        />

        {/* Terms */}
        <div className="flex items-center ml-85 gap-2">
          <input
            type="checkbox"
            className="h-4 w-4 accent-teal-700"
            name="terms"
            checked={agreedTerm}
            onChange={handleTermsChange}
          />
          <label htmlFor="terms" className="text-sm font-semibold">
            I agree to the{" "}
            <span className="text-teal-700 ml-1 cursor-pointer">
              Terms and Conditions
            </span>
          </label>
        </div>

        {/* Submit Button */}
        <button
          disabled={!agreedTerm}
          className={`p-2 rounded-md bg-teal-700 text-white hover:bg-teal-600 ${!agreedTerm ? "opacity-50 cursor-not-allowed" : ""
            }`}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default ApplyPage;
