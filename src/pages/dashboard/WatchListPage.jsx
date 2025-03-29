import React, { useState } from "react";
import { convertUnixTimeStampToDate } from "../../helper/dateService";

const WatchListPage = () => {
  const [data, setData] = useState("");
  const [filter, setFilter] = useState("1W");

  const formatData = () => {
    return data.c.map((item, index) => {
      return {
        value: item.toFixed(2),
        date: convertUnixTimeStampToDate(data.t[index]),
      };
    });
  };
  return <div></div>;
};

export default WatchListPage;
