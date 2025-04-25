import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTransactions from "../../hooks/ipohooks/useTransactions";
import { FiFilter } from "react-icons/fi";
import Transactiondisplay from "./Transactiondisplay";
import DonutChart from "../../components/common/DonoutChart";

const Transactions = () => {
  const { theme } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  const { data } = useTransactions(pageNumber, 5);
  const transactionData = data?.data || [];

  // Filter data if a type is selected
  const filteredData = selectedType
    ? transactionData.filter((item) => item.type === selectedType)
    : transactionData;

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 relative">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">
            Your Transactions
          </h1>
        </div>

        {/* Filter Button */}
        <div className="relative">
          <button
            onClick={() => setIsFilterOpen((prev) => !prev)}
            className="flex items-center gap-2 px-4 py-2 bg-purple-button text-white rounded-md hover:bg-purple-700"
          >
            <FiFilter className="text-lg" />
            Filter
          </button>

          {/* Filter Dropdown */}
          {isFilterOpen && (
            <div
              className={`absolute right-0 mt-2 w-full  border rounded shadow-md z-20 ${
                theme === "dark"
                  ? "bg-dark-bg text-dark-text"
                  : "bg-dark-bg text-dark-text"
              }`}
            >
              <button
                onClick={() => {
                  setSelectedType("buy");
                  setIsFilterOpen(false);
                }}
                className="block w-full px-4 py-2 text-left cursor-pointer"
              >
                Buy
              </button>
              <button
                onClick={() => {
                  setSelectedType("sell");
                  setIsFilterOpen(false);
                }}
                className="block w-full px-4 py-2 text-left cursor-pointer "
              >
                Sell
              </button>
            </div>
          )}
        </div>
      </div>

      <Transactiondisplay
        theme={theme}
        transactionData={filteredData}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        data={data}
      />

      <div className=" items-center flex justify-center">
        <DonutChart />
      </div>
    </div>
  );
};

export default Transactions;
