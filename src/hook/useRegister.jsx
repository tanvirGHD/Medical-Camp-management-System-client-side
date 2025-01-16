






import { useQuery } from '@tanstack/react-query';
import useAxiosRegister from './useAxiosRegister';
import useAuth from './useAuth';

const useRegister = () => {
  const axiosRegister = useAxiosRegister();
  const { user } = useAuth();

  const { data: register = [], isLoading: loading, refetch } = useQuery({
    queryKey: ['register', user?.email],  
    queryFn: async () => {
      const res = await axiosRegister.get(`/registerCamps?email=${user.email}`);
      return res.data;
    }
  });

  return [register, loading, refetch];
};

export default useRegister;
