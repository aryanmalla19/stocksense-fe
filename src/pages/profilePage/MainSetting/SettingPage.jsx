import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import SettingActivePage from "./SettingActivePage";

const SettingPage = () => {
  const { theme } = useContext(ThemeContext);
  const [activeTab, setActiveTab] = useState("Security");

  const getTabClass = (tabName) => {
    const isActive = activeTab === tabName;
    if (theme === "dark") {
      return isActive
        ? "bg-gray-300 text-light-text"
        : "bg-dark-bg text-dark-text";
    }
    return isActive ? "bg-gray-100" : "bg-white";
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">Settings</h2>
      <p className="text-xl">Manage your account settings and preferences.</p>

      <div
        className={`flex text-center text-gray-600 gap-2 mt-4 font-semibold p-2 rounded-md ${
          theme === "dark"
            ? "bg-dark-bg text-dark-text"
            : "bg-light-bg text-light-text"
        }`}
      >
        {["Security", "Notification"].map((tab) => (
          <p
            key={tab}
            className={`w-1/2 rounded-md p-1 cursor-pointer ${getTabClass(
              tab
            )}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </p>
        ))}
      </div>

      {/* Active Page */}
      <SettingActivePage activeTab={activeTab} theme={theme} />
    </div>
  );
};

export default SettingPage;
