import React from "react";
import Pagination from "../Stock/Pagination";

const Transactiondisplay = ({
  theme,
  transactionData,
  setPageNumber,
  pageNumber,
  data,
}) => {
  return (
    <>
      <div
        className={`outlet-container rounded-md p-8 transition-colors duration-300 overflow-y-scroll scrollbar-hidden h-105 
    ${
      theme === "dark"
        ? "bg-dark-bg border border-dark-bg shadow-md shadow-black/30"
        : "bg-white border border-gray-200 shadow-md shadow-gray-300"
    }`}
      >
        <div className="grid grid-cols-6 bg-purple-button  text-white font-semibold p-2 rounded-md sticky top-0 z-10">
          <p className="col-span-1">Company</p>
          <p>Price (Rs)</p>
          <p>Quantity</p>
          <p>Total Price (Rs)</p>
          <p>Transaction Fee (Rs)</p>
          <p>Type</p>
        </div>

        {/* Scrollable List */}
        <div className="h-[340px] overflow-y-scroll scrollbar-hidden">
          {transactionData.length === 0 ? (
            <p className="text-center mt-4 text-gray-500">
              No Transactions found.
            </p>
          ) : (
            transactionData.map((item, index) => {
              return (
                <div
                  key={index}
                  className={`grid grid-cols-6 gap-2  py-2 px-2 my-2 rounded-md overflow-auto  ${
                    theme === "dark"
                      ? " text-dark-text hover:bg-gray-700"
                      : " hover:bg-gray-100 text-light-text"
                  }`}
                >
                  <p className="col-span-1">{item.company_name}</p>
                  <p>{item.price}</p>
                  <p>{item.quantity}</p>
                  <p>{item.total_price}</p>
                  <p>{item.transaction_fee}</p>
                  <p
                    className={`flex font-semibold   ${
                      item.type === "buy"
                        ? "text-green-500 uppercase "
                        : "text-red-500 uppercase "
                    }`}
                  >
                    {item.type}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        links={data?.links}
      />
    </>
  );
};

export default Transactiondisplay;
