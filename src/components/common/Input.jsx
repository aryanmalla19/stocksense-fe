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
}) => {
  const { theme } = useContext(ThemeContext);


  return (
    <div className="relative">
      {Icon && (
        <Icon className="absolute left-4 top-1/2 transform -translate-y-1/2 text-red-500" />
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={`${className} ${theme == 'light'? 'input-light':'input-dark'}`}
        min={0}
        required
      />
      {/* Error message */}
      {error && <p className="text-red-500 text-xs">{error}</p>}
    </div>
  );
};

export default Input;
