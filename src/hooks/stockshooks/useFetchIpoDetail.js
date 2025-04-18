import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { IpoDetails } from '../../api/stocksApiService'

function useFetchIpoDetail(id = null) {
    const { data, refetch, isLoading, error } = useQuery({
      queryKey: ['ipo', id],
      queryFn: () => IpoDetails(id),
      enabled: id !== undefined,
    });
  
    return { data, refetch, isLoading, error };
  }
  

export default useFetchIpoDetail