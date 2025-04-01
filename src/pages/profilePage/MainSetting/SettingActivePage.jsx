import React from "react";
import SecurityPage from "./SecurityPage";
import NotificationPage from "./NotificationPage";

const SettingActivePage = ({ activeTab }) => {
  return (
    <div>
      {activeTab === "Security" && <SecurityPage />}

      {activeTab === "Notification" && <NotificationPage />}
    </div>
  );
};

export default SettingActivePage;
