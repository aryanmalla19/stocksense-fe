import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import useFetchIpoDetail from "../../hooks/stocks/useFetchIpoDetail";

const MyASBAPage = () => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const { data } = useFetchIpoDetail();

  const todayDate = new Date().toISOString().split("T")[0];

  useEffect(() => {
    if (data?.data) {
      setItems(data.data);
    }
  }, [data]);

  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">
            ISSUED Initial Public Offering LIST - IPO
          </h1>
        </div>
      </div>

      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300 overflow-y-scroll scrollbar-hidden h-[550px]
        ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <table className="min-w-full text-sm text-left ">
          <thead>
            <tr className="bg-purple-button text-white font-semibold p-2">
              <th className="px-4 py-3">Company</th>
              <th className="px-4 py-3">Open Date</th>
              <th className="px-4 py-3">Close Date</th>
              <th className="px-4 py-3">Listing Date</th>
              <th className="px-4 py-3">Issue Price</th>
              <th className="px-4 py-3">Total Shares</th>
              <th className="px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {items.length === 0 ? (
              <tr>
                <td colSpan="7" className="text-center py-6">
                  No IPO records found.
                </td>
              </tr>
            ) : (
              items.map((data) => {
                const isClosed = todayDate > data.close_date;
                const hasApplied = data.has_applied === true;
                return (
                  <tr
                    key={data.id}
                    className={`rounded-md text-sm ${
                      theme === "dark"
                        ? "hover:bg-gray-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    <td className="px-4 py-3">{data.company_name}</td>
                    <td className="px-4 py-3">{data.open_date}</td>
                    <td className="px-4 py-3">{data.close_date}</td>
                    <td className="px-4 py-3">{data.listing_date}</td>
                    <td className="px-4 py-3">Rs. {data.issue_price}</td>
                    <td className="px-4 py-3">{data.total_shares}</td>
                    <td className="px-4 py-3">
                      <Link to={`/apply/${data.id}`}>
                        <button
                          disabled={isClosed || hasApplied}
                          className={`px-4 py-2 rounded-md shadow-sm text-white ${
                            isClosed || hasApplied
                              ? "bg-gray-500 cursor-not-allowed"
                              : "bg-[#923eb9] hover:bg-[#af72cc]"
                          }`}
                        >
                          {hasApplied
                            ? "Applied"
                            : isClosed
                            ? "Closed"
                            : "Apply"}
                        </button>
                      </Link>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyASBAPage;
