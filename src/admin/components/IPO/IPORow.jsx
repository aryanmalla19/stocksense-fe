import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
// import { useNavigate } from "react-router-dom";
import useIPODelete from "../../../hooks/admin/useIPODelete";

function IPORow({ price, theme }) {
  const { deleteMutation } = useIPODelete();
  // const navigate = useNavigate();

  const handleDelete = (e, id) => {
    e.preventDefault();
    deleteMutation.mutate(id);
  };

  // const handleEdit = () => {
  //   navigate(`/ipo/edit/${price.id}`);
  // };

  const formatDateTime = (dateString) => {
    const dateObj = new Date(dateString);
    const date = dateObj.toISOString().split("T")[0];
    const time = dateObj.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
    return { date, time };
  };

  const open = formatDateTime(price.open_date);
  const close = formatDateTime(price.close_date);
  const listing = formatDateTime(price.listing_date);

  return (
    <div
      className={`grid grid-cols-9 rounded-md text-sm p-3 items-center ${
        theme === "dark"
          ? "text-dark-text hover:bg-gray-700"
          : "hover:bg-gray-100 text-light-text"
      }`}
    >
      <p className="col-span-2">{price.company_name}</p>

      <p className="flex flex-col">
        <span>{open.date}</span>
        <span className="text-green-700">{open.time}</span>
      </p>

      <p className="flex flex-col">
        <span>{close.date}</span>
        <span className="text-red-700">{close.time}</span>
      </p>

      <p className="flex flex-col">
        <span>{listing.date}</span>
        <span className="text-green-700">{listing.time}</span>
      </p>

      <p>{price.total_shares}</p>
      <p>${price.issue_price}</p>
      <p>{price.ipo_status}</p>

      <p className="flex gap-4">
        {/* <FaEdit
          className="text-green-500 cursor-pointer text-[17px]"
          onClick={handleEdit}
        /> */}
        <MdDeleteOutline
          className="text-red-500 text-xl cursor-pointer"
          onClick={(e) => handleDelete(e, price.id)}
        />
      </p>
    </div>
  );
}

export default IPORow;
