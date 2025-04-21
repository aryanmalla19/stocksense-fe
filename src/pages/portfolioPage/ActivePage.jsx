import React from "react";
import CurrentPortfolio from "./CurrentPortfolio";
import Holdings from "./Holdings";

const ActivePage = ({ activeTab, theme }) => {
  return (
    <div>
      {activeTab === "My Portfolio" && (
        <div className=" details-container">
          <h3 className="text-xl font-semibold mb-4">
            Portfolio Performance Chart
          </h3>
          <CurrentPortfolio />
        </div>
      )}

      {activeTab === "Holdings" && (
        <div className=" details-container">
          <h3 className="text-xl font-semibold mb-4">My Holdings</h3>
          <Holdings theme={theme} />
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
