import React from "react";
import Button from "./Button";
import { IoIosAddCircle } from "react-icons/io";

const AddNewStock = () => {
  return (
    <div>
      Add New Stock
      <Button classes="bg-teal-500 hover:bg-teal-700 flex gap-2 w-[500px] xl:w-auto items-center">
        <IoIosAddCircle />
        Add
      </Button>
    </div>
  );
};

export default AddNewStock;
