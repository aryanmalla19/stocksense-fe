import React from "react";
import ToggleButton from "../../../components/Common/ToggleButton";

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

const NotificationPage = ({ theme }) => {
  return (
    <div
      className={` rounded-md p-4 my-4 shadow ${
        theme === "dark"
          ? "bg-dark-bg text-dark-text"
          : "bg-light-bg text-light-text"
      }`}
    >
      <h2 className="header">Notification Settings</h2>
      <p className="paragraph">Choose how you want to receive notifications</p>

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
