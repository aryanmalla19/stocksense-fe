import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Calendar from "../../components/stocks/Calender";
import NorecordsFound from "../../components/common/NorecordsFound";
import useFetchIpoDetail from "../../hooks/stockshooks/useFetchIpoDetail";


const MyASBAPage = () => {
  const { theme } = useContext(ThemeContext);
  const [items, setItems] = useState([]);
  const {data, refetch, isLoading, error } = useFetchIpoDetail();
  useEffect(() => {
    if (data?.data) {
      setItems(data.data);
      console.log(data.data);
    }
  }, [data]);

  return (

    <div>
      <div className="flex justify-between">
        <h2 className="mb-4 font-bold text-2xl">ISSUED Initial Public Offering LIST - IPO</h2>
        <Calendar />
      </div>

      {items.length === 0 ? (
        <NorecordsFound />
      ) : (
        <div className="flex flex-col gap-4 my-4">
          <div
              key={data.id}
              className={`p-3 rounded-lg font-bold transition-all shadow flex items-center justify-between ${
                theme === "dark" ? "details-bg-dark" : "bg-white text-black px-4 py-2 rounded;"
              }`}
            >
              <h2>Company Name</h2>
              <h2>Open Date</h2>
              <h2>Close Date</h2>
              <h2>Listing Date</h2>
              <h2>issue Price</h2>
              <h2>Total Shares</h2>
              <h2></h2>
            </div>
          {items?.map((data) => (
            <div
              key={data.id}
              className={`p-3 rounded-lg transition-all shadow flex items-center justify-between ${
                theme === "dark" ? "details-bg-dark" : "bg-white text-black px-4 py-2 rounded;"
              }`}
            >
              <h2>{data.company_name}</h2>
              <h2>{data.open_date}</h2>
              <h2>{data.close_date}</h2>
              <h2>{data.listing_date}</h2>
              <h2>{data.issue_price}</h2>
              <h2>{data.total_shares}</h2>
              <Link to={`/apply/${data.id}`}>
                <button className={`px-5 py-2 rounded-md bg-teal-700 text-white cursor-pointer`}>
                  Apply
                </button>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyASBAPage;
