// import React from "react";
// import usePagination from "../../hooks/stockshooks/usePagination";

// const Pagination = () => {
//   const { paginationData, isLoading, error, refetch } = usePagination();
//   // Handle loading state
//   if (isLoading) {
//     return <div>Loading...</div>;
//   }

//   // Handle error state
//   if (error) {
//     return <div>Error loading pagination data: {error.message}</div>;
//   }
//   return (
//     <div className="flex items-center justify-center gap-4 py-4">
//       {/* Previous Button */}
//       <button
//       // onClick={}
//         className={`px-4 py-2 rounded-md bg-teal-600 text-white transition duration-300 cursor-pointer`}
//       >
//         Prev
//       </button>

//       {/* Page Number */}
//       <h2 className="text-xl font-semibold text-white">1</h2>

//       {/* Next Button */}
//       <button
//         className={`px-4 py-2 rounded-md bg-teal-600 text-white transition duration-300 cursor-pointer`}
//       >
//         Next
//       </button>
//     </div>
//   );
// };

// export default Pagination;
