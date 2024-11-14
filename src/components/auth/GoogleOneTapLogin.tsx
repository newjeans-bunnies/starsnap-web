import {useGoogleOneTapLogin} from "@react-oauth/google";
import token from "../../lib/token/token";
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../../constant/token/token.constant"
import CustomAxios from "../../lib/axios/CustomAxios"
import useSignUpModal from "../../hooks/useSignUpModal"


export function GoogleOneTapLogin() {
    const {setShowModal} = useSignUpModal();
    useGoogleOneTapLogin({
        onSuccess: credentialResponse => {

            CustomAxios.post('oauth/login', {
                token: credentialResponse.credential as string,
                type: 'google'
            }).then(res => {
                if (res.status === 200) {
                    token.setToken(ACCESS_TOKEN_KEY, res.data.accessToken);
                    token.setToken(REFRESH_TOKEN_KEY, res.data.refreshToken);
                }
            }).catch(err => {
                if (err.status === 404) {
                    console.log("404")
                    setShowModal(true)
                }
            })
        },
        onError: () => {
            console.log('Login Failed');
        },
    })

    return (
        <>
        </>
    )
}