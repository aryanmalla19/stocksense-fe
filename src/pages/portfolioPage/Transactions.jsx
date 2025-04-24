import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import useTransactions from "../../hooks/ipohooks/useTransactions";
import { FiFilter } from "react-icons/fi";
import { PiChartDonutFill } from "react-icons/pi";

import Transactiondisplay from "./Transactiondisplay";
import DonutChart from "../../components/common/DonoutChart";

const Transactions = () => {
  const { theme } = useContext(ThemeContext);
  const [pageNumber, setPageNumber] = useState(1);
  const { data } = useTransactions(pageNumber, 5);
  const transactionData = data?.data || [];

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8 ">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">
            Your Transactions
          </h1>
        </div>
        <button>Filter</button>
      </div>
      <Transactiondisplay
        theme={theme}
        transactionData={transactionData}
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        data={data}
      />

      {/* Chart Header */}
      <div className="flex flex-col justify-center items-center my-8">
        <div className="mb-6">
          <h2 className="text-xl font-semibold flex  gap-2">
            <PiChartDonutFill className="text-purple-500 text-2xl" />
            Stock Buy/Sell Ratio
          </h2>
          <p className="text-sm mt-1 ">
            A visual breakdown of your transactions
          </p>
        </div>

        <div className="w-full max-w-md items-center flex justify-center">
          <DonutChart />
        </div>
      </div>
    </div>
  );
};

export default Transactions;
