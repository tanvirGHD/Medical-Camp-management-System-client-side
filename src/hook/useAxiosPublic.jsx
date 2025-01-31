import axios from "axios";

const axiosPublic = axios.create({
    baseURL: 'https://y-omega-ten.vercel.app'
}) 

const useAxiosPublic = () => {

    return axiosPublic;
}

export default useAxiosPublic;



