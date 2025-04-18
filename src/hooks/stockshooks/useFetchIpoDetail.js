import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { IpoDetails } from '../../api/stocksApiService'

function useFetchIpoDetail() {
    const { data, refetch, isLoading, error } = useQuery({
        queryKey: ["ipo", 1],
        queryFn: IpoDetails
    });
  return { data, refetch, isLoading, error }
}

export default useFetchIpoDetail