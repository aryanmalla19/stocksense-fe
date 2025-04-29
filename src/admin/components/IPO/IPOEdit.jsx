import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useIPODetailsFetch from "../../../hooks/admin/useIPODetailsFetch";
import useEditIPO from "../../../hooks/admin/useEditIPO";

function IPOEdit({ theme, title }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading } = useIPODetailsFetch();
  const { mutate: editIPOMutate, isLoading: isEditing } = useEditIPO();

  const ipoData =
    data &&
    Array.isArray(data.data) &&
    data.data.find((item) => item.id === parseInt(id));

  // States
  const [selectedStocks, setSelectedStocks] = useState("");
  const [openDate, setOpenDate] = useState("");
  const [closeDate, setCloseDate] = useState("");
  const [totalShares, setTotalShares] = useState("");
  const [issuePrice, setIssuePrice] = useState("");
  const [listingDate, setListingDate] = useState("");

  useEffect(() => {
    if (ipoData) {
      setSelectedStocks(ipoData.stock_symbol || "");
      setOpenDate(ipoData.open_date || "");
      setCloseDate(ipoData.close_date || "");
      setTotalShares(ipoData.total_shares || "");
      setIssuePrice(ipoData.issue_price || "");
      setListingDate(ipoData.listing_date || "");
    }
  }, [ipoData]);

  // Handle Close Modal (Cancel button or clicking overlay)
  const handleClose = () => {
    navigate(-1); // Go back to previous page
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedData = {
      stock_symbol: selectedStocks,
      open_date: openDate,
      close_date: closeDate,
      total_shares: Number(totalShares),
      issue_price: Number(issuePrice),
      listing_date: listingDate,
    };

    editIPOMutate(
      { id, updatedData },
      {
        onSuccess: () => {
          alert("IPO updated successfully!");
          navigate(-1); // Close modal after editing
        },
        onError: (error) => {
          alert("Failed to update IPO: " + error.message);
        },
      }
    );
  };

  if (isLoading || !ipoData) {
    return (
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div className="text-gray-600 text-lg">Loading IPO details...</div>
      </div>
    );
  }

  return (
    <>
      {/* Background overlay */}
      <div
        className="fixed inset-0 bg-[rgba(0,0,0,0.5)] backdrop-blur-[4px] z-30"
        onClick={handleClose}
      ></div>

      {/* Modal Content */}
      <div className="fixed inset-0 flex items-center justify-center z-50">
        <div
          className={`w-full max-w-md p-6 rounded-lg ${
            theme === "dark"
              ? "bg-dark-bg text-gray-200"
              : "bg-white text-gray-800"
          }`}
        >
          <h2 className="text-xl text-center font-semibold mb-4">
            {title ? `Edit ${title}` : "Edit IPO Details"}
          </h2>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Stock Symbol */}
            <div className="space-y-2">
              <label className="block text-[17px] font-medium">
                Stock Symbol
              </label>
              <input
                name="stockSymbol"
                value={selectedStocks}
                onChange={(e) => setSelectedStocks(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Open Date and Time */}
            <div className="space-y-2">
              <label className="block text-[17px] font-medium">
                Open Date and Time
              </label>
              <input
                type="datetime-local"
                name="openDateTime"
                value={openDate}
                onChange={(e) => setOpenDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Close Date and Time */}
            <div className="space-y-2">
              <label className="block text-[17px] font-medium">
                Close Date and Time
              </label>
              <input
                type="datetime-local"
                name="closeDateTime"
                value={closeDate}
                onChange={(e) => setCloseDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Total Shares */}
            <div className="space-y-2">
              <label className="block text-[17px] font-medium">
                Total Shares
              </label>
              <input
                type="number"
                name="totalShares"
                placeholder="e.g. 1000000"
                value={totalShares}
                onChange={(e) => setTotalShares(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Issue Price */}
            <div className="space-y-2">
              <label className="block text-[17px] font-medium">
                Issue Price
              </label>
              <input
                type="number"
                name="issuePrice"
                step="0.01"
                placeholder="e.g. 150.00"
                value={issuePrice}
                onChange={(e) => setIssuePrice(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Listing Date and Time */}
            <div className="space-y-2">
              <label className="block text-[17px] font-medium">
                Listing Date and Time
              </label>
              <input
                type="datetime-local"
                name="listingDate"
                value={listingDate}
                onChange={(e) => setListingDate(e.target.value)}
                className="w-full px-4 py-2 border rounded-md"
              />
            </div>

            {/* Buttons */}
            <div className="flex justify-end space-x-3 mt-6">
              <button
                type="button"
                onClick={handleClose}
                className="px-4 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={isEditing}
                className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:outline-none"
              >
                {isEditing ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default IPOEdit;
