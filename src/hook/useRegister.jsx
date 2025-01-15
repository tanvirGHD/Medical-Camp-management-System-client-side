import { useQuery } from '@tanstack/react-query';
import useAxiosRegister from './useAxiosRegister';

const useRegister = () => {
    const axiosRegister = useAxiosRegister();

    const { data: register = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['register'],  
        queryFn: async () => {  
            const res = await axiosRegister.get('/registerCamps');
            return res.data;
        }
    });

    return [register, loading, refetch];
};

export default useRegister;
