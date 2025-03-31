import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { Link } from "react-router-dom";
import Calendar from "../../components/stocks/Calender";
import NorecordsFound from "../../components/common/NorecordsFound";

const items = [
  { id: 1, company: "ABC company" },
  { id: 2, company: "BCD company" },
  { id: 3, company: "Oi company" },
  { id: 4, company: "Oii company" },
];

const MyASBAPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      <div className="flex justify-between">
        <h2 className="mb-4 font-bold text-2xl">ISSUED COMPANY LIST</h2>
        <Calendar />
      </div>

      {items.length === 0 ? (
        <NorecordsFound />
      ) : (
        <div className="flex flex-col gap-4 my-4">
          {items.map((data) => (
            <div
              key={data.id}
              className={`p-3 rounded-lg transition-all flex justify-between ${
                theme === "dark" ? "details-bg-dark " : "details-bg-light"
              }`}
            >
              <h2>{data.company}</h2>
              <Link to={`/apply/${data.id}`}>
                <button className="p-2 rounded-md bg-[var(--dark-bg-secondary)] text-white cursor-pointer">
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
