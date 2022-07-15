import instance from "./instance";


export const securityApi = {
    getCaptchaUrl() {
        return instance.get('/security/get-captcha-url')
    }
}
