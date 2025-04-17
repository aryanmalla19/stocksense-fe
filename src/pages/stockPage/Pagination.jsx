import React from "react";

const Pagination = ({ pageNumber, setPageNumber }) => {
  return (
    <div className="flex items-center justify-center gap-4 py-4">
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        className={`px-4 py-2 rounded-md bg-teal-600 text-white transition duration-300 cursor-pointer`}
      >
        Prev
      </button>

      <h2 className="text-xl font-semibold text-white">{pageNumber}</h2>

      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        className={`px-4 py-2 rounded-md bg-teal-600 text-white transition duration-300 cursor-pointer`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
