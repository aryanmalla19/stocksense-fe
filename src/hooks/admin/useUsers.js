import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../api/adminApiService";

const useUsers = () => {
  const [page, setPage] = useState(1);

  const { data, isLoading, error } = useQuery({
    queryKey: ['users', page],
    queryFn: () => getAllUsers(page),
    keepPreviousData: true,
  });

  const changePage = (newPage) => {
    setPage(newPage);
  };

  return {
    users: data?.data || [],
    pagination: {
      currentPage: data?.current_page,
      lastPage: data?.last_page,
      links: data?.links,
      total: data?.total,
      perPage: data?.per_page,
    },
    isLoading,
    error,
    changePage,
  };
};

export default useUsers;
