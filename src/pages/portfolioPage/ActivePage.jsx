import React from "react";
import CurrentPortfolio from "./CurrentPortfolio";

const ActivePage = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "My Portfolio" && (
        <div className=" details-container">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Portfolio Performance Chart
          </h3>
          <CurrentPortfolio />
        </div>
      )}

      {activeTab === "Allocation" && (
        <div className=" details-container">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Allocated tocks
          </h3>
        </div>
      )}

      {activeTab === "Add Shares" && (
        <div className=" details-container">
          <h3 className="text-xl font-semibold mb-4 text-center">Shares </h3>
        </div>
      )}

      {activeTab === "History" && (
        <div className=" details-container">
          <h3 className="text-xl font-semibold mb-4 text-center">History </h3>
        </div>
      )}
    </div>
  );
};

export default ActivePage;
