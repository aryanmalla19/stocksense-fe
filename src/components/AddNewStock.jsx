import React from "react";
import Button from "./Button";
import { IoIosAddCircle } from "react-icons/io";

const AddNewStock = () => {
  return (
    <div className="w-full pr-8">
      Add New Stock
      <Button classes="bg-teal-500 hover:bg-teal-700 flex gap-2 min-w-full items-center justify-center">
        <IoIosAddCircle />
        Add
      </Button>
    </div>
  );
};

export default AddNewStock;
