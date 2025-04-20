import { useQuery } from '@tanstack/react-query'
import { UserSetting } from '../../api/stocksApiService'

function useFetchUserData() {
    const { data, refetch, isLoading, error } = useQuery({
      queryKey: ['user-settings'],
      queryFn: () => UserSetting(),
    });
  
    return { data, refetch, isLoading, error };
  }
  

export default useFetchUserData