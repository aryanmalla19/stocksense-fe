import { useQuery } from "@tanstack/react-query";
import React from "react";
import { IpoApplication } from "../../api/ipoApi";

const useIPOList = () => {
  const { data, refetch } = useQuery({
    queryKey: ["ipoApplication"],
    queryFn: IpoApplication,
  });
  return { data, refetch };
};

export default useIPOList;
