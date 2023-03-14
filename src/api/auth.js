import { instance } from './axios'

const auth = {
    getAuthStatus() {
        return instance.get('auth/me')
    },
    loginRequest(email, password, rememberMe = false) {
        return instance.post('auth/login', { email, password, rememberMe })
    },
    logoutRequest() {
        return instance.delete('auth/login')
    }
}

export default auth
