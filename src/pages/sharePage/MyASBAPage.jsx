import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Calendar from "../../components/stocks/Calender";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";

const MyASBAPage = () => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const { data } = useFetchIpoDetail();

  useEffect(() => {
    if (data?.data) {
      setItems(data.data);
      console.log(data.data);
    }
  }, [data]);

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="flex justify-between items-center mb-6">
        <h2
          className={`font-bold text-2xl ${
            theme === "dark" ? "text-white" : "text-gray-800"
          }`}
        >
          ISSUED Initial Public Offering LIST - IPO
        </h2>
        <Calendar />
      </div>

      {/* IPO Table */}
      <div
        className={`overflow-x-auto rounded-md p-4 ${
          theme === "dark"
            ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
            : "bg-white border border-gray-200 shadow-md shadow-gray-300"
        }`}
      >
        <table className="min-w-full text-sm text-left ">
          <thead>
            <tr
              className={`${
                theme === "dark"
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-800"
              }`}
            >
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
              items.map((data) => (
                <tr
                  key={data.id}
                  className={`rounded-md text-sm ${
                    theme === "dark"
                      ? "hover:bg-gray-700"
                      : "hover:bg-gray-100 "
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
                      <button className="px-4 py-2 bg-teal-600 hover:bg-teal-700 text-white rounded-md shadow-sm">
                        Apply
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyASBAPage;
