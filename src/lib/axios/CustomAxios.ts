import axios from 'axios';

const CustomAxios = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_PUBLIC_LOCAL_API_HOST + '/api/',
    timeout: 90000,
});

CustomAxios.interceptors.request.use(
    function (config) {
        return Promise.resolve(config);
    },
    error => Promise.reject(error),
);

CustomAxios.interceptors.response.use(
    response => {
        return response;
    }
)

export default CustomAxios;