import React from "react";
import {
  TbSortAscending2Filled,
  TbSortDescending2Filled,
} from "react-icons/tb";
import { RxCaretSort } from "react-icons/rx";

const SortTableHeader = ({ label, sortBy, sortOrder, onSort, columnKey }) => {
  const handleSort = () => onSort(columnKey);

  const getIcon = () => {
    if (sortBy === columnKey) {
      if (columnKey === "name" || columnKey === "sector") {
        return sortOrder === "asc" ? (
          <TbSortAscending2Filled className="text-green-500" />
        ) : (
          <TbSortDescending2Filled className="text-red-500" />
        );
      } else {
        return sortOrder === "asc" ? (
          <TbSortDescending2Filled className="text-red-500" />
        ) : (
          <TbSortAscending2Filled className="text-green-500" />
        );
      }
    }
    return <RxCaretSort />;
  };

  return (
    <div onClick={handleSort} className="flex items-center cursor-pointer">
      <span>{label}</span>
      <span className="ml-1">{getIcon()}</span>
    </div>
  );
};

export default SortTableHeader;
