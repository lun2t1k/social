import { instance } from './axios';

const auth = {
    getAuthStatus() {
        return instance.get('auth/me');
    },
}

export default auth;
