import React from "react";
import SecurityPage from "./SecurityPage";
import NotificationPage from "./NotificationPage";

const SettingActivePage = ({ activeTab, theme }) => {
  return (
    <div>
      {activeTab === "Security" && <SecurityPage theme={theme} />}

      {activeTab === "Notification" && <NotificationPage theme={theme} />}
    </div>
  );
};

export default SettingActivePage;
