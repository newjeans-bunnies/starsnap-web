import { getCookie, setCookie, removeCookie } from 'typescript-cookie'

class Cookie {
    public getCookie(key: string): string | undefined {
        let item = undefined;
        if (getCookie(key) !== undefined) {
            item = getCookie(key);
        }
        return item;
    }

    public setCookie(key: string, value: string): void {
        setCookie(key, value);
    }

    public removeCookie(key: string): void {
        removeCookie(key);
    }
}

export default new Cookie();