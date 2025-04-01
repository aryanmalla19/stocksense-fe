import React from "react";
import ToggleButton from "../../components/common/ToggleButton";

const notificationOptions = [
  {
    title: "Email Notification",
    description: "Receive notifications via email",
  },
  {
    title: "Push Notification",
    description: "Receive notifications on your device",
  },
];

const NotificationPage = () => {
  return (
    <div className="border border-gray-600 rounded-md p-4 my-4">
      <h2 className="text-2xl font-bold mb-3">Notification Settings</h2>
      <p className="text-lg font-semibold mb-4">
        Choose how you want to receive notifications
      </p>

      {notificationOptions.map((option, index) => (
        <div key={index} className="flex justify-between items-center my-4">
          <div>
            <h3 className="font-semibold">{option.title}</h3>
            <p className="text-gray-400">{option.description}</p>
          </div>
          <ToggleButton />
        </div>
      ))}
    </div>
  );
};

export default NotificationPage;
