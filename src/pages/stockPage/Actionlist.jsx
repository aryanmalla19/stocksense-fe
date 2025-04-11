import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

const Actionlist = () => {
  return (
    <div className="p-4">
      <ul className="space-y-2">
        <div className="flex gap-3">
          <button className="text-red-500 hover:text-red-700" title="Delete">
            <FaTrash />
          </button>
        </div>
      </ul>
    </div>
  );
};

export default Actionlist;
