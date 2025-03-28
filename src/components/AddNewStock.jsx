import React from "react";
import Button from "./Button";
import { IoIosAddCircle } from "react-icons/io";
import Input from "./Input";

const AddNewStock = () => {
  return (
    <section className="w-full details-container ">
      <Input />
      <Input />
      <Input />
      <Button classes="bg-teal-500 hover:bg-teal-700 flex gap-2 min-w-full items-center justify-center mt-4">
        <IoIosAddCircle />
        Add
      </Button>
    </section>
  );
};

export default AddNewStock;
