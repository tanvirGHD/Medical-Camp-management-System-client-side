import useAxiosPublic from './useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const useCamps = () => {
    const axiosPublic = useAxiosPublic();
    
    const {data: camps = [], isPending: loading, refetch} = useQuery({
        queryKey: ['camps'],
        queryFn: async() => {
            const res = await axiosPublic.get('/camps');
            return res.data;
        }
    })
    return [camps, loading, refetch]
};

export default useCamps;

