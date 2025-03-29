import React from "react";

const Input = ({ value, onChange, placeholder, ref }) => {
  return (
    <div className="">
      <input
        className="bg-gray-200 hover:bg-gray-300 text-[#4D4D4D] my-1 p-2 w-full focus:outline-none rounded-md"
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        ref={ref}
      />
    </div>
  );
};

export default Input;
