import React from "react";

const Pagination = ({ pageNumber, setPageNumber, links }) => {
  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={pageNumber <= 1}
        className={`px-4 py-2 rounded-md bg-[#923EB9] text-white transition duration-300 cursor-pointer ${
          pageNumber <= 1 ? "opacity-50 cursor-not-allowed" : ""
        }`}
      >
        Prev
      </button>

      <h2 className="text-xl font-semibold text-white">{pageNumber}</h2>

      <button
        onClick={() => setPageNumber((prev) => (links?.next ? prev + 1 : prev))}
        className={`px-4 py-2 rounded-md ${
          links?.next ? "bg-[#923EB9]" : "bg-[#702194]"
        }  text-white transition duration-300 cursor-pointer`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
