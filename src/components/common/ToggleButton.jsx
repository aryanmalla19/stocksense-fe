import React, { useState } from "react";

const ToggleButton = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <button
        onClick={handleToggle}
        style={{
          position: "relative",
          width: "50px",
          height: "24px",
          borderRadius: "12px",
          border: "none",
          backgroundColor: isToggled ? "#14c2ab" : "#4d4d4d",
          cursor: "pointer",
          outline: "none",
          padding: 0,
          transition: "background-color 0.3s ease",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "2px",
            left: isToggled ? "calc(100% - 22px)" : "2px",
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            backgroundColor: isToggled ? "#ffffff" : "#f5f5f5",
            transition: "left 0.3s ease",
            boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
          }}
        />
      </button>
    </div>
  );
};

export default ToggleButton;
