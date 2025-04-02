import React, { useState } from "react";
import ActiveTab from "./ActiveTab";

const BuysellHeading = () => {
  const [selectTab, setSelectTab] = useState("");
  return (
    <div className="flex justify-between px-10 py-3 items-center">
      <div className="flex gap-20 items-center">
        <div>
          <h2 className="font-semibold text-[18px]">Client Name</h2>
          <p className="text-gray-400">Neetu Rai</p>
        </div>
        <div>
          <h2 className="font-semibold text-[18px]">Client Code</h2>
          <p className="text-gray-400">1451</p>
        </div>
      </div>

      <div>
        <div className="flex gap-2 font-semibold">
          <button
            className="p-2 px-3 bg-green-600 text-white rounded-md hover:bg-green-500"
            onClick={() => setSelectTab("buy")}
          >
            Buy
          </button>
          <button
            className="p-2 px-3 bg-red-600 text-white rounded-md hover:bg-red-500"
            onClick={() => setSelectTab("sell")}
          >
            Sell
          </button>
        </div>
      </div>

      <ActiveTab selectTab={selectTab} />
    </div>
  );
};

export default BuysellHeading;
