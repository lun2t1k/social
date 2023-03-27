import { instance } from './axios'

const auth = {
    getAuthStatus() {
        return instance.get('auth/me')
    },
    loginRequest(email, password, rememberMe, captcha) {
        return instance.post('auth/login', { email, password, rememberMe, captcha })
    },
    logoutRequest() {
        return instance.delete('auth/login')
    }
}

export default auth
