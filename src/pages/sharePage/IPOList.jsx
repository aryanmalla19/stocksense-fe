import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import useIPOList from "../../hooks/ipohooks/useIPOList";
import { MdPending } from "react-icons/md";

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
      <h2 className="text-3xl font-semibold mb-6 pb-2 flex items-center justify-between text-[#9E15BF]">
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
          <div className="grid grid-cols-5 bg-purple-button  text-white font-semibold p-2 rounded-md">
            <p>Applied Date</p>
            <p>Applied Time</p>
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
                  className={`grid grid-cols-5 px-2 py-3 text-sm rounded-md hover:bg-gray-100/10 ${
                    theme === "dark"
                      ? "hover:bg-gray-700/30"
                      : "hover:bg-gray-100"
                  }`}
                  key={index}
                >
                  <p className="flex items-center">
                    {new Date(item.applied_date).toISOString().split("T")[0]}
                  </p>
                  <p className="flex items-center">
                    {new Date(item.applied_date).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: true,
                    })}
                  </p>
                  <p className="flex items-center">{item.applied_shares}</p>
                  <p className="flex items-center">{item.allotted_shares}</p>
                  <p
                    className={`flex items-center justify-center p-2 rounded-md text-sm w-24 ${
                      item.status === "pending"
                        ? "bg-teal-700 text-white"
                        : item.status === "approved"
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.status === "pending" ? (
                      <MdPending className="mr-2" />
                    ) : item.status === "approved" ? (
                      <FaArrowUp className="mr-2" />
                    ) : (
                      <FaArrowDown className="mr-2" />
                    )}
                    {item.status.charAt(0).toUpperCase() + item.status.slice(1)}
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
