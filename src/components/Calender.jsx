import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Calendar = () => {
  // Get the current date
  const currentDate = new Date();
  const dateString = currentDate.toLocaleDateString();

  return (
    <div className="flex items-center space-x-2">
      {/* Calendar Icon */}
      <FaCalendarAlt size={20} className="text-purple-500" />

      {/* Display current date */}
      <span>{dateString}</span>
    </div>
  );
};

export default Calendar;
