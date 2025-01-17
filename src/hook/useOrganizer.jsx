import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosRegister from "./useAxiosRegister";


const useOrganizer = () => {
    const {user} = useAuth();
    const axiosRegister = useAxiosRegister();
    const {data: isOrganizer, isPending: isOrganizerLoading} = useQuery({
        queryKey: [user?.email, 'isOrganizer'],
        queryFn: async()=>{
            const res = await axiosRegister.get(`/users/organizer/${user.email}`);
            // console.log(res.data)
            return res.data?.organizer;
        }
    })
    return [isOrganizer, isOrganizerLoading];
};

export default useOrganizer;


