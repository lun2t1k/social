import instance from './axios';

const authAPI = {
    getAuthStatus() {
        return instance.get('auth/me');
    },
}

export default authAPI;
