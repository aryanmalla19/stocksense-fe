import React, { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";
import Input from "./Input";
import Button from "./Button";

const AddNewStock = () => {
  const [stockSymbol, setStockSymbol] = useState("");
  const [stockName, setStockName] = useState("");
  const [stockSector, setStockSector] = useState("");

  return (
    <section className="w-[500px] details-container ">
      <Input
        value={stockSymbol}
        onChange={(e) => setStockSymbol(e.target.value)}
        placeholder={"Enter Stock Symbol"}
      />
      <Input
        value={stockName}
        onChange={(e) => setStockName(e.target.value)}
        placeholder={"Enter Stock Name"}
      />
      <Input
        value={stockSector}
        onChange={(e) => setStockSector(e.target.value)}
        placeholder={"Enter Stock Sector"}
      />
      <Button classes="bg-teal-500 hover:bg-teal-700 flex gap-2 min-w-full items-center justify-center mt-4">
        <IoIosAddCircle />
        Add
      </Button>
    </section>
  );
};

export default AddNewStock;
