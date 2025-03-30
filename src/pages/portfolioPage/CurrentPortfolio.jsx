import React from "react";

const CurrentPortfolio = () => {
  return (
    <div className="flex flex-col border border-gray-100 rounded-md shadow-md max-w-full">
      <div className="p-4 bg-[var(--bg-secondary)] min-w-full">
        <h2 className="text-center font-bold text-black">Current Portfolio</h2>
      </div>
      <div className="p-4 flex flex-col justify-around sm:flex-row">
        {/* Current Investment */}

        <div>
          <h3 className="font-semibold text-gray-400 mb-2">
            Current Investment
          </h3>
          <p className="text-2xl font-bold">Rs. 64,648.5</p>
          <div className="mt-2">
            <p className="text-sm text-gray-400">Unrealized Loss</p>
            <p className="text-red-600 font-medium">Rs. -4,436.92 (-6.86%)</p>
          </div>
        </div>

        {/* Net Worth */}

        <div>
          <h3 className="font-semibold text-gray-400 mb-2">Net Worth</h3>
          <p className="text-2xl font-bold">Rs. 59,775.71</p>
          <div className="mt-2">
            <p className="text-sm text-gray-400">Today's Loss</p>
            <p className="text-red-600 font-medium">Rs. -2,716.12 (-1.29%)</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentPortfolio;
