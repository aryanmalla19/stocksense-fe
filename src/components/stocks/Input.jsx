import React from "react";

const Input = React.forwardRef(
  ({ name, type, placeholder, icon: Icon, ...rest }, ref) => {
    return (
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500" />
        )}
        <input
          className="bg-[#f0fcf0] hover:bg-[#f0fcf0] text-[#4D4D4D] my-1 px-3 py-2 pl-10 w-full focus:outline-none rounded-md"
          name={name}
          type={type}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;
