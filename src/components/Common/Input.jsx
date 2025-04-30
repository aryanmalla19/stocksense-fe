import React, { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";

const Input = ({
  name,
  type,
  value,
  onChange,
  placeholder,
  error,
  icon: Icon,
  className,
  disabled,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="relative">
      {Icon && (
        <div
          className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-1 rounded-full 
            ${theme === "light" ? "bg-red-500 text-white" : "text-red-500"}`}
        >
          <Icon />
        </div>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        className={`${className}`}
        min={0}
        required
      />
      {/* Error message */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
