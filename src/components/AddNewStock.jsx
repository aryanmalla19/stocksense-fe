import React from "react";
import Button from "./Button";
import { IoIosAddCircle } from "react-icons/io";
import Input from "./Input";

const AddNewStock = () => {
  return (
    <section className="w-full pr-8 m-4">
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
