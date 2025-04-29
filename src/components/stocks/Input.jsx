import React from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Input = React.forwardRef(
  (
    {
      name,
      type,
      placeholder,
      icon: Icon,
      error,
      showToggle,
      onToggle,
      ...rest
    },
    ref
  ) => {
    return (
      <div className="mb-3 relative">
        <div className="flex items-center bg-gray-100 rounded-md p-2 relative">
          {Icon && <Icon className="text-gray-500 mx-2" />}
          <input
            className="bg-gray-100 text-[#4D4D4D] my-1 px-3 w-full focus:outline-none rounded-md pr-10"
            name={name}
            type={type}
            placeholder={placeholder}
            ref={ref}
            {...rest}
          />
          {showToggle && (
            <button
              type="button"
              onClick={onToggle}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {type === "password" ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}

        </div>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
