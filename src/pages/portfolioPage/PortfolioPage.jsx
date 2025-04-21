import React, { useContext, useState } from "react";
import ActivePage from "./ActivePage";
import { ThemeContext } from "../../context/ThemeContext";

const items = [
  { label: "My Portfolio" },
  { label: "Holdings" },
  { label: "Add Shares" },
  { label: "History" },
];

const PortfolioPage = () => {
  const [activeTab, setActiveTab] = useState("My Portfolio");
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full">
      <h2 className="text-center text-3xl font-bold mb-8">Stocks Portfolio</h2>
      <div className="flex justify-around mx-10 border-b-2 border-gray-300">
        {items.map((item) => (
          <div
            key={item.label}
            className={`relative font-semibold pb-4 px-2 cursor-pointer ${
              activeTab === item.label ? "text-gray-700" : "text-gray-400"
            }`}
            onClick={() => setActiveTab(item.label)}
          >
            <h2>{item.label}</h2>
            {activeTab === item.label && (
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-teal-700 rounded-t"></div>
            )}
          </div>
        ))}
      </div>

      <ActivePage activeTab={activeTab} theme={theme} />
    </div>
  );
};

export default PortfolioPage;
