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
        <div
          className={`flex items-center rounded-md p-1 md:p-2 relative ${
            error ? "bg-red-50 border border-red-400" : "bg-gray-100"
          }`}
        >
          {Icon && (
            <Icon
              className={`mx-2 ${
                error ? "text-red-500" : "text-gray-500"
              }`}
            />
          )}
          <input
            className={`text-[#4D4D4D] my-1 px-3 w-full focus:outline-none rounded-md pr-10 bg-transparent ${
              error ? "text-red-600" : ""
            }`}
            name={name}
            type={type}
            placeholder={placeholder}
            ref={ref}
            aria-invalid={!!error}
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

        {error && (
          <p className="text-sm text-red-500 mt-1 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
