import React from "react";
import { PiSpinnerBold } from "react-icons/pi";

const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center gap-2">
      <PiSpinnerBold className="w-5 h-5 animate-spin" />
      Loading ...
    </div>
  );
};

export default LoadingSpinner;
