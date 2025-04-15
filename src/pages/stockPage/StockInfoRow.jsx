import React from "react";

const StockInfoRow = ({ items, stock }) => (
  <div className="flex">
    {items.map(
      ({ label, valueKey, icon, color = "text-gray-700", empty }, index) => (
        <div key={index} className="flex-1 text-center">
          {empty ? (
            <div className="invisible">
              <div>Label</div>
              <div>Value</div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-center gap-1">
                {label} {icon}
              </div>
              <div className={color}>{stock[valueKey]}</div>
            </>
          )}
        </div>
      )
    )}
  </div>
);

export default StockInfoRow;
