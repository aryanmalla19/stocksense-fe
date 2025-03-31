import React from "react";

const Input = ({ value, onChange, placeholder, ref }) => {
  return (
    <div className="">
      <input
        className="bg-[#f0fcf0] hover:bg-[#f0fcf0] text-[#4D4D4D] my-1 px-3 py-2 w-full focus:outline-none rounded-md"
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
