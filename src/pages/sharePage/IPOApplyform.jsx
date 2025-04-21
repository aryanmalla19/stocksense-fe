// IPOApplyform.js
import React from "react";
import Input from "../../components/common/Input";

const InputField = ({
  label,
  placeholder,
  value,
  onChange,
  readOnly = false,
  error,
}) => (
  <div className="flex flex-col gap-1">
    <label className="text-sm font-medium text-gray-600 dark:text-gray-300">
      {label}
    </label>
    <Input
      type="number"
      placeholder={placeholder}
      className={`p-2 border rounded-md focus:outline-none bg-white text-black ${
        readOnly ? "opacity-80 cursor-not-allowed" : ""
      } ${error ? "border-red-500" : "border-gray-300"}`}
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const IPOApplyform = ({
  kittaAmount,
  handleChange,
  amount,
  agreedTerm,
  handleTermsChange,
  handleSubmit,
  isPending,
  isSuccess,
  error,
  minKitta = 1,
  maxKitta = 1000,
}) => {
  return (
    <div className={`flex justify-between items-center `}>
      <div className="flex flex-col gap-4">
        <InputField
          label={`Applied Kitta (Min: ${minKitta}, Max: ${maxKitta})`}
          placeholder="Enter number of kittas"
          value={kittaAmount}
          onChange={handleChange}
          error={error}
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
            <span className="text-teal-600 underline cursor-pointer">
              Terms and Conditions
            </span>
          </label>
        </div>

        <button
          onClick={handleSubmit}
          disabled={!agreedTerm || isPending || isSuccess || error}
          className={`mt-4 px-6 py-2 rounded-md font-medium text-white transition ${
            agreedTerm && !error && !isPending && !isSuccess
              ? "bg-teal-700 hover:bg-teal-600 cursor-pointer"
              : "bg-teal-700 opacity-50 cursor-not-allowed"
          }`}
        >
          {isPending
            ? "Submitting..."
            : isSuccess
            ? "Applied Successfully!"
            : "Submit Application"}
        </button>
      </div>
    </div>
  );
};

export default IPOApplyform;
