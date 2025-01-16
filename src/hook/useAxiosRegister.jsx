
import axios from "axios";

const axiosRegister = axios.create({
    baseURL: 'http://localhost:5000'//secure
})
const useAxiosRegister = () => {
    axiosRegister.interceptors.request.use(function(config){
        const token = localStorage.getItem('access-token')
        console.log('request stopped by interceptors', token)
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        return Promise.reject(error);
    })

    //intercepts 401 and 403 status 
    axiosRegister.interceptors.response.use(function(response){
        return response;
    }, (error) =>{
        const status = error.response.status;
        console.log('status error in the interceptor',status)
        return Promise.reject(error);
    })

    return axiosRegister;
};

export default useAxiosRegister;
  