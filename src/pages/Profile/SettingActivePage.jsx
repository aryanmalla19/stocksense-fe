import React from "react";
import SecurityPage from "./SecurityPage";

const SettingActivePage = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "Security" && <SecurityPage />}

      {activeTab === "Notification" && <h1>Hello Notification</h1>}
    </div>
  );
};

export default SettingActivePage;
