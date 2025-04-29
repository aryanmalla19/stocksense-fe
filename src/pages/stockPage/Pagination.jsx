import React from "react";

const Pagination = ({ pageNumber, setPageNumber, links }) => {
  console.log(links);
  const isPrevDisabled = pageNumber <= 1;
  const isNextDisabled = !links?.next;

  return (
    <div className="flex items-center justify-center gap-4 pt-4">
      <button
        onClick={() => setPageNumber((prev) => prev - 1)}
        disabled={isPrevDisabled}
        className={`px-4 py-2 rounded-md bg-[#923EB9] text-white transition duration-300 ${
          isPrevDisabled ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
        }`}
      >
        Prev
      </button>

      <h2 className="text-xl font-semibold text-gray-500">{pageNumber}</h2>

      <button
        onClick={() => setPageNumber((prev) => prev + 1)}
        disabled={isNextDisabled}
        className={`px-4 py-2 rounded-md ${
          isNextDisabled
            ? "bg-[#702194] opacity-50 cursor-not-allowed"
            : "bg-[#923EB9] cursor-pointer"
        } text-white transition duration-300`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
