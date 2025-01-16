
import axios from "axios";

const axiosRegister = axios.create({
    baseURL: 'http://localhost:5000'//secure
})
const useAxiosRegister = () => {
    return axiosRegister;
};

export default useAxiosRegister;
  