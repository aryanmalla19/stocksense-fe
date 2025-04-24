import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useIPOList from "../../hooks/ipohooks/useIPOList";

const IPOList = () => {
  const { theme } = useContext(ThemeContext);
  const { data } = useIPOList();
  const ipoApplication = data?.data || [];

  return (
    <div
      className={`${
        theme === "dark" ? "text-dark-text" : "text-light-text"
      } min-h-screen p-6`}
    >
      <h2 className="text-3xl font-semibold mb-6 pb-2 flex items-center justify-between">
        Your IPO Applications
        {data?.isLoading && (
          <div className="animate-spin h-6 w-6 border-4 border-t-transparent border-blue-500 rounded-full" />
        )}
      </h2>

      <div
        className={`max-h-[600px] overflow-y-scroll scrollbar-hidden p-6 rounded-xl shadow-lg transition-all ${
          theme === "dark" ? "bg-dark-bg" : "bg-light-bg"
        }`}
      >
        <div className="overflow-x-auto">
          <div className="grid grid-cols-6 font-semibold text-xl border-b py-3">
            <p>Applied Date</p>
            <p>Applied Shares</p>
            <p>Allotted Shares</p>
            <p>Status</p>
          </div>

          {ipoApplication.length === 0 ? (
            <p className="text-center mt-4 text-gray-500">
              No IPO applications found.
            </p>
          ) : (
            ipoApplication.map((item, index) => {
              return (
                <div
                  className={`grid grid-cols-6 py-4 text-sm border-b hover:bg-gray-100/10 ${
                    theme === "dark"
                      ? "hover:bg-gray-700/30"
                      : "hover:bg-gray-100"
                  }`}
                  key={index}
                >
                  <p className="flex items-center">{item.applied_date}</p>
                  <p>{item.applied_shares}</p>
                  <p>{item.allotted_shares}</p>
                  <p
                    className={`flex items-center justify-center p-2 rounded-md text-sm w-24 ${
                      item.status === "pending"
                        ? "bg-yellow-500 text-white"
                        : item.status === "approved"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.status === "pending" ? (
                      <FaArrowDown className="mr-2" />
                    ) : item.status === "approved" ? (
                      <FaArrowUp className="mr-2" />
                    ) : (
                      <FaArrowDown className="mr-2" />
                    )}
                    {item.status}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default IPOList;
