import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import Input from "../../components/common/Input";
import useApplyShare from "../../hooks/useApplyShare";

// Reusable Input Section Component
const InputSection = ({ label, placeholder, value, onChange, readOnly }) => (
  <div className="flex flex-col sm:flex-row gap-4">
    <label className="w-full sm:w-80">{label}</label>
    <Input
      type="number"
      placeholder={placeholder}
      className="w-full sm:w-[500px] bg-gray-300 border text-black p-2 rounded-md focus:outline-none"
      value={value}
      onChange={onChange}
      readOnly={readOnly}
    />
  </div>
);

const ApplyPage = () => {
  const { kittaAmount, amount, agreedTerm, handleChange, handleTermsChange } =
    useApplyShare();
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div
        className={`rounded-md px-4 py-3 flex flex-col gap-4 ${
          theme === "dark"
            ? "bg-gray-800 text-white"
            : "bg-gray-200 text-gray-800"
        }`}
      >
        <div className="grid gap-6">
          {/* Static BOID Section */}
          <div className="flex items-center gap-4">
            <label className="w-80">BOID</label>
            <div className="flex">1301020000012345</div>
          </div>

          {/* Dynamic Input Sections */}

          <InputSection
            label="Applied Kitta"
            placeholder="Enter Applied Kitta"
            value={kittaAmount}
            onChange={handleChange}
          />

          <InputSection
            label="Amount"
            placeholder="Amount will be calculated"
            value={amount}
            readOnly
          />

          {/* Terms and condition section */}
          <div className="flex items-center ml-85 gap-2">
            <input
              type="checkbox"
              className="h-4 w-4"
              checked={agreedTerm}
              onChange={handleTermsChange}
            />
            <label htmlFor="terms" className="text-sm font-semibold">
              I agree to the
              <span className="text-orange-400 cursor-pointer">
                Terms and Conditions
              </span>
            </label>
          </div>

          {/* Submit button */}
          <button
            disabled={!agreedTerm}
            className={`p-2 rounded-md bg-teal-700 text-white hover:bg-teal-600 ${
              !agreedTerm ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplyPage;
