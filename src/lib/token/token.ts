import cookie from '../cookie/cookie'
import {ACCESS_TOKEN_KEY, REFRESH_TOKEN_KEY} from "../../constant/token/token.constant";

class Token {
    public getToken(key: string): string | undefined {
        return cookie.getCookie(key);
    }

    public setToken(key: string, token: string): void {
        cookie.setCookie(key, token);
    }

    public clearToken() {
        cookie.removeCookie(ACCESS_TOKEN_KEY);
        cookie.removeCookie(REFRESH_TOKEN_KEY);
    }

    public haveAccessToken(): Boolean {
        return !(cookie.getCookie(ACCESS_TOKEN_KEY) === undefined)
    }
}

export default new Token();