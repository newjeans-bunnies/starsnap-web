import axios from 'axios';
import token from '../token/token'
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../../constant/token/token.constant";

const AuthAxios = axios.create({
    withCredentials: true,
    baseURL: process.env.REACT_APP_PUBLIC_LOCAL_API_HOST + '/api/',
    timeout: 90000,
});

if (token.haveAccessToken()) {
    AuthAxios.defaults.headers.common['Authorization'] = 'Bearer ' + token.getToken(ACCESS_TOKEN_KEY)
} else {
    console.log("토큰 없음")
}

AuthAxios.interceptors.request.use(
    function (config) {
        return Promise.resolve(config);
    },
    error => Promise.reject(error),
);

AuthAxios.interceptors.response.use(
    response => {
        return response;
    },

    async function (error) {
        const originalRequest = error.config
        if (error.response) {
            if (error.response.status === 401 && !originalRequest._retry) {
                await reissueToken(originalRequest, error)
            } else {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(error);
        }
    }
)

async function reissueToken(originalRequest: any, error: any) {
    return axios
        .patch(process.env.REACT_APP_PUBLIC_LOCAL_API_HOST + '/api/auth/refresh',  // PATCH 요청의 데이터 (없다면 빈 객체를 전달)
            {
                headers: {
                    'refresh-token': token.getToken(REFRESH_TOKEN_KEY),
                    'access-token': token.getToken(ACCESS_TOKEN_KEY),
                    'Content-Type': 'application/json'
                }
            })
        .then(res => {
            if (res.data && res.data.data.jwt_access) {
                const access_token = res.data.data.jwt_access;
                console.log('[axios]success new token receive : ' + access_token);
                token.setToken(ACCESS_TOKEN_KEY, access_token);
                originalRequest.headers['Authorization'] = 'Bearer ' + access_token;
                return AuthAxios(originalRequest);
            } else {
                return Promise.reject('재발급에러');
            }
        })
        .catch(err => {
            console.log('토큰 재발급 중 에러가 발생했습니다.');
            console.log(err);
            return Promise.reject(error);
        });
}

export default AuthAxios;