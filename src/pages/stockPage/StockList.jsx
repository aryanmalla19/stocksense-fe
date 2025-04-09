import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import StockListTable from "./StockListTable";
import Calendar from "../../components/stocks/Calender";
import SearchStock from "./SearchStock";

const StockList = () => {
  const [searchSymbol, setSearchSymbol] = useState("");
  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {/* Header Section */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 mx-8">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold py-2">Stock List</h1>
          <p
            className={`text-sm mt-1 ${
              theme === "dark"
                ? "text-[var(--dark-text-accent)]"
                : "text-[var(--text-accent)]"
            }`}
          >
            Track your favorite stocks
          </p>
        </div>

        {/* Search Stock using Symbol */}
        <SearchStock
          searchSymbol={searchSymbol}
          setSearchSymbol={setSearchSymbol}
        />

        {/* Current date */}
        <Calendar />
      </div>

      {/* Main Content */}
      <div
        className={`outlet-container border rounded-md ${
          theme === "dark"
            ? "border-[var(--dark-border-primary)]"
            : "border-[var(--border-primary)]"
        }`}
      >
        <main>
          <StockListTable
            searchSymbol={searchSymbol}
            setSearchSymbol={setSearchSymbol}
          />
        </main>
      </div>
    </div>
  );
};

export default StockList;
