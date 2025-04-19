import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Calendar from "../../components/stocks/Calender";
import NorecordsFound from "../../components/common/NorecordsFound";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";

const MyASBAPage = () => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const { data, refetch, isLoading, error } = useFetchIpoDetail();

  useEffect(() => {
    if (data?.data) {
      setItems(data.data);
    }
  }, [data]);

  const isDark = theme === "dark";

  const containerClasses = `p-4 rounded-lg shadow-md transition-all flex items-center justify-between ${
    isDark ? "bg-gray-800 text-white" : "bg-white text-gray-900"
  }`;

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <h2 className="text-2xl font-semibold">Issued IPO List</h2>
        <Calendar />
      </div>

      {items.length === 0 ? (
        <div className="mt-8">
          <NorecordsFound />
        </div>
      ) : (
        <div className="mt-6 flex flex-col gap-4">
          {/* Header Row */}
          <div className={`${containerClasses} font-bold bg-teal-600 text-white`}>
            <div className="w-1/5">Company</div>
            <div className="w-1/5 text-center">Open Date</div>
            <div className="w-1/5 text-center">Close Date</div>
            <div className="w-1/5 text-center">Listing Date</div>
            <div className="w-1/5 text-center">Issue Price</div>
            <div className="w-fit"></div>
          </div>

          {/* Data Rows */}
          {items.map((ipo) => (
            <div key={ipo.id} className={containerClasses}>
              <div className="w-1/5">{ipo.company_name}</div>
              <div className="w-1/5 text-center">{ipo.open_date}</div>
              <div className="w-1/5 text-center">{ipo.close_date}</div>
              <div className="w-1/5 text-center">{ipo.listing_date}</div>
              <div className="w-1/5 text-center">Rs. {ipo.issue_price}</div>
              <div className="w-fit">
                <Link to={`/apply/${ipo.id}`}>
                  <button className="px-4 cursor-pointer py-2 rounded-md bg-teal-600 hover:bg-teal-700 text-white transition">
                    Apply
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyASBAPage;
