import React from "react";

const Button = ({ children, classes, onClick }) => {
  return (
    <div>
      <button
        className={`text-white font-bold py-1 px-2 rounded-md w-full xl:w-auto  m-4  ${classes}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
};

export default Button;
